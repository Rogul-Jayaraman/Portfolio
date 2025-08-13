export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 lg:p-12">
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I'm a passionate full-stack developer with a strong foundation in both hardware and software technologies.
            My journey in tech began with a fascination for how things work, which led me to explore everything from
            circuit design to modern web applications.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            With expertise spanning multiple domains including software development, hardware integration, and automotive
            technologies, I bring a unique perspective to every project. I believe in creating solutions that are not
            only functional but also elegant and user-friendly.
          </p>

          <p className="text-lg leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
            When I'm not coding, you'll find me tinkering with new technologies, contributing to open-source projects,
            or exploring the latest trends in artificial intelligence and machine learning. I'm always eager to take
            on new challenges and collaborate with like-minded individuals.
          </p>

          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-primary/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">Problem Solver</span>
            <span className="px-4 py-2 bg-primary/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">Team Player</span>
            <span className="px-4 py-2 bg-primary/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">Lifelong Learner</span>
            <span className="px-4 py-2 bg-primary/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">Innovation Enthusiast</span>
          </div>
        </div>
      </div>
    </section>
  );
}
