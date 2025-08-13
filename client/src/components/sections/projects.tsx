import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      title: "IoT Smart Home System",
      description: "Smart home automation system using ESP32, sensors, and mobile app. Controls lighting, temperature, security, and energy monitoring with real-time data visualization.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["ESP32", "Flutter", "Firebase", "Arduino"]
    },
    {
      title: "AI Analytics Dashboard",
      description: "Machine learning dashboard for predictive analytics and data visualization. Features real-time data processing, custom ML models, and interactive charts for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Python", "TensorFlow", "D3.js", "FastAPI"]
    },
    {
      title: "Mobile Productivity App",
      description: "Cross-platform mobile application for task management and productivity tracking. Features include goal setting, time tracking, progress analytics, and team collaboration tools.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Redux", "SQLite", "Push Notifications"]
    },
    {
      title: "Blockchain Trading Platform",
      description: "Decentralized trading platform built on Ethereum blockchain. Features smart contracts, real-time market data, portfolio management, and secure wallet integration.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Solidity", "Web3.js", "Next.js", "MetaMask"]
    },
    {
      title: "Automotive Diagnostic Tool",
      description: "Professional OBD-II diagnostic tool with real-time engine monitoring, fault code analysis, and performance optimization suggestions for automotive technicians.",
      image: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["C++", "Qt", "CAN Bus", "OBD-II"]
    }
  ];

  return (
    <section id="projects" className="py-20 geometric-pattern relative overflow-hidden">
      <div className="absolute top-20 left-1/3 w-40 h-40 bg-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-primary-600/15 rotate-45 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6 scroll-snap-x" style={{ width: "max-content" }}>
            {projects.map((project, index) => (
              <div
                key={index}
                className="scroll-snap-start glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 w-80 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-primary/20 text-primary-700 dark:text-primary-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1 bg-primary text-white hover:bg-primary-600 text-sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10 text-sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
