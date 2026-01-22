import { useState } from "react";
import { Cpu, Code, Car, Wrench } from "lucide-react";

// Software Icons
import cppIcon from "@/assets/images/skills/software/cpp.png";
import cssIcon from "@/assets/images/skills/software/css.png";
import htmlIcon from "@/assets/images/skills/software/html.png";
import javaIcon from "@/assets/images/skills/software/java.png";
import jsIcon from "@/assets/images/skills/software/js.png";
import nextIcon from "@/assets/images/skills/software/nextjs.png";
import nodeIcon from "@/assets/images/skills/software/node.png";
import pyIcon from "@/assets/images/skills/software/py.png";
import reactIcon from "@/assets/images/skills/software/react.png";
import tsIcon from "@/assets/images/skills/software/ts.png";
import viteIcon from "@/assets/images/skills/software/vitejs.png";

// Database Icons
import prismaIcon from "@/assets/images/skills/database/prisma.png";
import mongoIcon from "@/assets/images/skills/database/mongodb.png";
import neonIcon from "@/assets/images/skills/database/neon db.png";
import mysqlIcon from "@/assets/images/skills/database/mysql.png";

// Hardware Icons
import embcIcon from "@/assets/images/skills/hardware/embc.png";
import circuitsIcon from "@/assets/images/skills/hardware/circuits.png";
import arduinoIcon from "@/assets/images/skills/hardware/arduino.png";
import sensorsIcon from "@/assets/images/skills/hardware/sensors.png";

// Tools Icons
import vercelIcon from "@/assets/images/skills/tools/vercel.png";
import vscodeIcon from "@/assets/images/skills/tools/vscode.png";
import githubIcon from "@/assets/images/skills/tools/github.png";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("software");
  const softwareSkills = [
    {
      name: "Java",
      icon: javaIcon,
      proficiency: "Advanced",
      keyConcepts: ["OOP", "Collections","DSA"],
    },
    {
      name: "C++",
      icon: cppIcon,
      proficiency: "Intermediate",
      keyConcepts: ["OOP","Pointers","DSA"],
    },
    {
      name: "Python",
      icon: pyIcon,
      proficiency: "Beginner",
      keyConcepts: ["OOP", "Methods"],
    },
    {
      name: "HTML",
      icon: htmlIcon,
      proficiency: "Advanced",
      keyConcepts: ["HTML Tags", "Forms"],
    },
    {
      name: "CSS",
      icon: cssIcon,
      proficiency: "Advanced",
      keyConcepts: ["Flexbox", "Grid","Animation"],
    },
    {
      name: "JavaScript",
      icon: jsIcon,
      proficiency: "Advanced",
      keyConcepts: ["DOM", "ES6+","JSON"],
    },
    {
      name: "TypeScript",
      icon: tsIcon,
      proficiency: "Beginner",
      keyConcepts: ["Type Safety", "Generics"],
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Express", "APIs"],
    },
    {
      name: "React",
      icon: reactIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Hooks", "State Management"],
    },
    {
      name: "Next.js",
      icon: nextIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Server Side Routing", "Routing"],
    },
  ];

  // Hardware Skills
  const hardwareSkills = [
    {
      name: "Embedded C",
      icon: embcIcon,
      proficiency: "Beginner",
      keyConcepts: ["Microcontrollers"],
    },
    {
      name: "Controllers",
      icon: arduinoIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Arduino", "Node MCU","ESP32"],
    },
    {
      name: "Sensors",
      icon: sensorsIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Active & Passivs Sensors"],
    },
  ];

  // Database Skills
  const dbSkills = [
    {
      name: "Prisma",
      icon: prismaIcon,
      proficiency: "Intermediate",
      keyConcepts: ["ORM", "Data Modeling"],
    },
    {
      name: "MongoDB",
      icon: mongoIcon,
      proficiency: "Beginner",
      keyConcepts: ["JSON", "CRUD Operation"],
    },
    {
      name: "NeonDB",
      icon: neonIcon,
      proficiency: "Intermediate",
      keyConcepts: ["CRUD Operation", "Prisma"],
    },
    {
      name: "MySQL",
      icon: mysqlIcon,
      proficiency: "Beginner",
      keyConcepts: ["Relational DB", "Queries"],
    },
  ];

  // Tools Learned
  const toolsLearned = [
    {
      name: "Vercel",
      icon: vercelIcon,
      proficiency: "Intermediate",
      keyConcepts: ["Deployment", "Hosting"],
    },
    {
      name: "VSCode",
      icon: vscodeIcon,
      proficiency: "Advanced",
      keyConcepts: ["Extensions", "Debugging"],
    },
    {
      name: "GitHub",
      icon: githubIcon,
      proficiency: "Advanced",
      keyConcepts: ["Git", "Collaboration"],
    },
  ];

  const getSkills = () => {
    switch (activeTab) {
      case "hardware":
        return hardwareSkills;
      case "software":
        return softwareSkills;
      case "db":
        return dbSkills;
      case "tools":
        return toolsLearned;
      default:
        return softwareSkills;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-600/5"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="Heading">
          Skills
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center items-center mb-12">
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-full p-2">
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "software"
                  ? "bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("software")}
            >
              <Code className="inline-block mr-2 h-4 w-4" />
              Software
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "hardware"
                  ? "bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("hardware")}
            >
              <Cpu className="inline-block mr-2 h-4 w-4" />
              Hardware
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "db"
                  ? "bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("db")}
            >
              <Car className="inline-block mr-2 h-4 w-4" />
              Database
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "tools"
                  ? "bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("tools")}
            >
              <Wrench className="inline-block mr-2 h-4 w-4" />
              Tools
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getSkills().map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center glassmorphism bg-teal-50/70 dark:bg-gray-800/70 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex gap-6">
                <img src={skill.icon} alt={skill.name} className="h-10" />
                <div className="grid grid-rows-2 gap-0">
                  <h3 className="text-base text-gray-700 dark:text-gray-300 font-semibold">{skill.name}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {skill.proficiency}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {skill.keyConcepts.map((concept, i) => (
                  <span
                    key={i}
                    className="Tags"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
