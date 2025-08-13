import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Download, Send, Linkedin, Github, Twitter, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = async (resumeType: string) => {
    try {
      const response = await fetch(`/api/download/${resumeType}`);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `John_Doe_${resumeType}_Resume.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        toast({
          title: "Download started",
          description: `${resumeType} resume is downloading...`,
        });
      } else {
        throw new Error("Download failed");
      }
    } catch (error) {
      toast({
        title: "Download failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const hobbies = ["Photography", "Gaming", "Hiking", "3D Printing", "Arduino Projects"];

  return (
    <footer className="bg-gray-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-primary-600/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Download Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center">
                <div className="bg-primary/20 rounded-full p-3 mr-4">
                  <Mail className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/20 rounded-full p-3 mr-4">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-primary/20 rounded-full p-3 mr-4">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Resume Downloads */}
            <div className="space-y-4 mb-8">
              <h4 className="text-xl font-bold mb-4">Download Resume</h4>

              <div className="flex space-x-4">
                <Button
                  onClick={() => handleDownload("hardware")}
                  variant="outline"
                  className="flex-1 bg-primary/20 border-primary text-primary-400 hover:bg-primary/30"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Hardware Resume
                </Button>
                <Button
                  onClick={() => handleDownload("software")}
                  variant="outline"
                  className="flex-1 bg-primary/20 border-primary text-primary-400 hover:bg-primary/30"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Software Resume
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-200"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-200"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-primary p-3 rounded-lg transition-colors duration-200"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Hobby Section */}
            <div>
              <h4 className="text-xl font-bold mb-4">My Hobbies</h4>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="bg-primary/20 text-primary-400 px-3 py-1 rounded-full text-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 John Doe. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
