import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ff from "@/assets/images/projects/focuzflow.png";
import agri from "@/assets/images/projects/smartrover.png";
import sched from "@/assets/images/projects/schedulla.png";
import di from "@/assets/images/projects/dynamicinvoice.png";
import pdc from "@/assets/images/projects/potatoDiseaseClassifier.jpeg";
import { title } from "process";
import { Description } from "@radix-ui/react-toast";

export default function Projects() {
  const projects = [
    {
      image: pdc,
      title: "Potato Disease Classifier",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "Machine Learning",
        "FastAPI",
        "Model Training"
      ],
      description:
        "Developed a machine learning model to classify potato diseases using TensorFlow and Keras, integrated with a FastAPI backend for real-time predictions.",
      git: "https://github.com/Rogul-Jayaraman/Potato_Disease_Classifier",
    },
    {
      image: ff,
      title: "Focuz Flow",
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Prisma",
        "NeonDB",
        "Clerk",
        "Git",
        "Shadcn",
      ],
      description:
        "Developed a full-stack web application to manage tasks across multiple projects. Implemented user authentication, task categorization into “To-Do,” “In Progress,” and “Completed,” with a responsive and user-friendly interface.",
      git: "https://github.com/Rogul-Jayaraman/focuz-flow",
      demo: "https://focuz-flow.vercel.app/",
    },
    {
      image: sched,
      title: "Schedulla",
      tech: [
        "Next.js",
        "Shadcn",
        "PostgreSQL",
        "Clerk",
        "NeonDB",
        "Tailwind CSS",
        "Git",
        "JavaScript"
      ],
      description:
        "Developed a full-stack web app for task scheduling and meeting management featuring a responsive ShadCN UI, secure Clerk-based authentication, and multi-user support. Users can create and book meetings with others and mark them on Google Calendar.",
      git: "https://github.com/Rogul-Jayaraman/Schedulla",
      demo: "https://schedulla.vercel.app",
    },
    {
      image: di,
      title: "Dynamic Invoice Generator",
      tech: ["HTML", "CSS", "JavaScript", "Git"],
      description:
        "Built a responsive and user-friendly invoice generator web application that allows users to dynamically add billing rows, calculate subtotals, taxes, and grand total in real time.",
      git: "https://github.com/Rogul-Jayaraman/Dynamic-Invoice",
      demo: "https://rogul-jayaraman.github.io/Dynamic-Invoice/Dynamic_Invoice.html",
    },
    {
      image: agri,
      title: "Smart Irrigation Management System",
      tech: ["Embedded C", "Arduino IDE", "NodeMCU", "ESP32", "Camera"],
      description:
        "Designed an IoT-based irrigation system that monitors soil moisture and automates water supply, optimizing resource use and supporting sustainable farming.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 geometric-pattern relative overflow-hidden"
    >
      <div className="absolute top-20 left-1/3 w-40 h-40 bg-teal-300/20 dark:bg-cyan-300/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-2 w-40 h-40 bg-teal-300/20 dark:bg-cyan-300/20  rounded-full animate-pulse-slow animation-delay-4"></div>
      <div className="absolute bottom-40 right-2 w-40 h-40 bg-teal-300/20 dark:bg-cyan-300/20  rounded-full animate-pulse-slow animation-delay-2"></div>
      <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-teal-100/50 dark:bg-cyan-100/50  rotate-45 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="Heading">Featured Projects</h2>

        <div className="overflow-x-auto pb-6">
          <div
            className="flex space-x-10 scroll-snap-x"
            style={{ width: "max-content" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col scroll-snap-start glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 w-96 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 rounded-xl mb-4"
                />
                <h3 className="text-xl font-bold mb-2  bg-gradient-to-r from-teal-500 to-cyan-700 bg-clip-text text-transparent">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="Tags"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  {project.git && (
                    <Button
                      className="flex-1 ButtonFill text-sm"
                      onClick={() =>
                        window.open(project.git, "_blank", "noopener,noreferrer")
                      }
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
                  {
                    project.demo && (
                      <Button
                        variant="outline"
                        className="flex-1 border-primary text-primary hover:bg-primary/10 text-sm"
                        onClick={() =>
                          window.open(project.demo, "_blank", "noopener,noreferrer")
                        }
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    )
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
