import { useState } from "react";
import { Cpu, Code, Car } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("hardware");

  const hardwareSkills = [
    {
      icon: "🔧",
      name: "Microcontrollers",
      proficiency: "Expert",
      level: 95,
      description: "Arduino, Raspberry Pi, ESP32 development and IoT integration"
    },
    {
      icon: "📟",
      name: "PCB Design",
      proficiency: "Professional",
      level: 85,
      description: "Eagle, KiCad, Altium Designer for circuit board design"
    },
    {
      icon: "⚡",
      name: "Electronics",
      proficiency: "Professional",
      level: 80,
      description: "Analog/Digital circuits, sensors, actuators, and embedded systems"
    }
  ];

  const softwareSkills = [
    {
      icon: "🟨",
      name: "JavaScript",
      proficiency: "Expert",
      level: 95,
      description: "ES6+, TypeScript, Node.js, React, Vue.js development"
    },
    {
      icon: "🐍",
      name: "Python",
      proficiency: "Professional",
      level: 85,
      description: "Django, Flask, FastAPI, data analysis, and machine learning"
    },
    {
      icon: "🗄️",
      name: "Databases",
      proficiency: "Professional",
      level: 80,
      description: "MySQL, PostgreSQL, MongoDB, Redis optimization"
    },
    {
      icon: "⚛️",
      name: "Frontend",
      proficiency: "Expert",
      level: 90,
      description: "React, Next.js, Tailwind CSS, responsive design"
    },
    {
      icon: "🖥️",
      name: "Backend",
      proficiency: "Professional",
      level: 85,
      description: "Node.js, Express, RESTful APIs, microservices"
    },
    {
      icon: "🐳",
      name: "DevOps",
      proficiency: "Intermediate",
      level: 70,
      description: "Docker, Kubernetes, CI/CD, AWS cloud services"
    }
  ];

  const automobileSkills = [
    {
      icon: "🔋",
      name: "Automotive Electronics",
      proficiency: "Professional",
      level: 80,
      description: "ECU programming, CAN bus, automotive diagnostics"
    },
    {
      icon: "🔌",
      name: "Electric Vehicles",
      proficiency: "Intermediate",
      level: 70,
      description: "Battery management systems, charging infrastructure"
    },
    {
      icon: "🤖",
      name: "Autonomous Systems",
      proficiency: "Intermediate",
      level: 65,
      description: "LIDAR, computer vision, sensor fusion technologies"
    }
  ];

  const getSkills = () => {
    switch (activeTab) {
      case "hardware": return hardwareSkills;
      case "software": return softwareSkills;
      case "automobile": return automobileSkills;
      default: return hardwareSkills;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-primary-600/5"></div>
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-full p-2">
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "hardware"
                  ? "bg-primary text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("hardware")}
            >
              <Cpu className="inline-block mr-2 h-4 w-4" />
              Hardware
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "software"
                  ? "bg-primary text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("software")}
            >
              <Code className="inline-block mr-2 h-4 w-4" />
              Software
            </button>
            <button
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeTab === "automobile"
                  ? "bg-primary text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("automobile")}
            >
              <Car className="inline-block mr-2 h-4 w-4" />
              Automobile
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSkills().map((skill, index) => (
            <div
              key={index}
              className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Proficiency</span>
                  <span className="font-semibold text-primary">{skill.proficiency}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-primary-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
