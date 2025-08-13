import { GraduationCap, University, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 geometric-pattern relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary-600/15 rotate-45 animate-float"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bachelor's Degree */}
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-primary/20 rounded-full p-4 mr-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Bachelor of Technology</h3>
                <p className="text-primary font-semibold mb-1">Computer Science & Engineering</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2019 - 2023</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Comprehensive study of computer science fundamentals, software engineering principles,
              and emerging technologies with a focus on practical applications.
            </p>

            <div className="flex items-center">
              <span className="bg-gradient-to-r from-primary to-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                CGPA: 8.5/10
              </span>
            </div>
          </div>

          {/* Master's Degree */}
          <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start mb-6">
              <div className="bg-primary/20 rounded-full p-4 mr-4">
                <University className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Master of Science</h3>
                <p className="text-primary font-semibold mb-1">Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2023 - Present</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Advanced studies in software architecture, system design, and emerging technologies
              with research focus on scalable applications and modern development practices.
            </p>

            <div className="flex items-center">
              <span className="bg-gradient-to-r from-primary to-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Current CGPA: 9.2/10
              </span>
            </div>
          </div>

          {/* Certifications */}
          <div className="md:col-span-2 glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8">
            <div className="flex items-start mb-6">
              <div className="bg-primary/20 rounded-full p-4 mr-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Certifications</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Continuous Learning & Development</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-2xl text-primary mb-2">☁️</div>
                <p className="font-semibold text-sm">AWS Certified Developer</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-2xl text-primary mb-2">⚛️</div>
                <p className="font-semibold text-sm">React Specialist</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-4 text-center">
                <div className="text-2xl text-primary mb-2">🗄️</div>
                <p className="font-semibold text-sm">Database Administrator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
