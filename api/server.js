import express from 'express';
import { storage } from "./storage.ts";
import path from "path";
import fs from "fs";
const app = express();

app.use(express.json());

// Your existing routes
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          message: "Missing required fields: name, email, and message are required" 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: "Invalid email format" 
        });
      }

      // Here you would typically send an email or save to database
      console.log("Contact form submission:", { name, email, message });
      
      res.json({ 
        message: "Contact form submitted successfully",
        data: { name, email, timestamp: new Date().toISOString() }
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        message: "Internal server error while processing contact form" 
      });
    }
  });
app.get("/api/download/:resumeType", async (req, res) => {
    try {
      const { resumeType } = req.params;
      
      if (!["hardware", "software"].includes(resumeType)) {
        return res.status(400).json({ 
          message: "Invalid resume type. Must be 'hardware' or 'software'" 
        });
      }

      // In a real application, you would have actual PDF files
      // For now, we'll return a placeholder response
      const resumePath = path.join(process.cwd(), "resumes", `${resumeType}_resume.pdf`);
      
      // Check if file exists
      if (fs.existsSync(resumePath)) {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="Rogul_Jayaraman_${resumeType}_Resume.pdf"`);
        
        const fileStream = fs.createReadStream(resumePath);
        fileStream.pipe(res);
      } else {
        // Return a placeholder response if file doesn't exist
        res.status(404).json({ 
          message: `${resumeType} resume not found. Please contact directly for resume.` 
        });
      }
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        message: "Internal server error while downloading resume" 
      });
    }
  });


export default app;