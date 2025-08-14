import { GraduationCap, University, Award, School } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 geometric-pattern relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-600/15 rotate-45 animate-float"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-300 to-cyan-700 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          {/* Bachelor's Degree */}
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-primary/20 rounded-full p-4 mr-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Bachelor of Engineering
                </h3>
                <p className="text-primary font-semibold mb-1">
                  Electronics and Communication
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2022 - 2026
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-justify dark:text-gray-300 mb-4 text-sm leading-6">
              At{" "}
              <strong>Sri Krishna College of Engineering and Technology</strong>
              , I built a strong foundation in electronics and embedded systems.
              I developed a keen interest in software development through
              projects, strengthening my problem-solving and logical thinking
              skills
            </p>

            <div className="mt-8">
              <span className="bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50 px-4 py-2 rounded-full text-sm font-medium">
                CGPA : 8.18/10
              </span>
            </div>
          </div>
          {/* Higher Secondary*/}
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-primary/20 rounded-full p-4 mr-4">
                <School className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Higher Secondary Education
                </h3>
                <p className="text-primary font-semibold mb-1">
                  Computer Science, Mathematics
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  2020 - 2022
                </p>
              </div>
            </div>

            <p className="text-gray-700 text-justify dark:text-gray-300 mb-4 text-sm leading-6">
              At <strong>Kongu Matric Hr Sec School</strong>, I developed a solid foundation in
              computer science, which served as the first stepping stone in my
              programming journey. During this time, I gained fundamental knowledge in programming concepts, and electronics
            </p>

            <div className=" mt-8">
              <span className="bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50 px-4 py-2 rounded-full text-sm font-medium">
                Percentage : 95.16 %
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
