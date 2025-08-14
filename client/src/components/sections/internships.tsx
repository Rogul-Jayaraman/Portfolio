import { CheckCircle } from "lucide-react";
import rampex from "@/assets/images/Intern/rampex.png";
import zerovalue from "@/assets/images/Intern/zerovalue.png";

export default function Internships() {
  const internships = [
  {
    company: "Rampex Technologies",
    role: "Full Stack Developer Intern",
    period: "Sep, 2024 - Dec, 2024 | Coimbatore, Tamil Nadu",
    logo: rampex,
    achievements: [
      "Contributed to the development of the official Rampex website using HTML, CSS, JavaScript, and React.js",
      "Designed and implemented responsive layouts with a focus on mobile optimization",
      "Enhanced user experience through clean visual aesthetics and smooth navigation",
    ]
  },
  {
    company: "Zero Value Infotech",
    role: "Embedded Systems Intern",
    period: "Jun, 2024 - Jul, 2024 | Coimbatore, Tamil Nadu",
    logo: zerovalue,
    achievements: [
      "Gained practical knowledge in embedded systems, including hardware interfacing and microcontroller programming",
      "Developed basic projects using sensors, microcontrollers, and communication modules",
      "Strengthened skills in circuit design, embedded C programming, and system integration",
    ]
  }
];


  return (
    <section id="internships" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-teal-600/5"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/0 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          Internship Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={internship.logo}
                  alt={`${internship.company} Logo`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-gray-700 dark:text-gray-300 font-bold">{internship.role}</h3>
                  <p className=" bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent font-semibold">{internship.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{internship.period}</p>
                </div>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {internship.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-500/70 dark:text-cyan-400/70 mr-2 mt-0.5 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
