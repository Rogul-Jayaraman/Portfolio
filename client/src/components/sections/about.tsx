export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-300/5 to-teal-300-600/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-300-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="Heading">
          About Me
        </h2>

        <div className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-8 lg:p-12">
          <p className="text-base text-justify leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            I am a final-year Electronics and Communication Engineering student
            and a passionate full-stack developer with a solid foundation in
            both hardware and software technologies. My journey in technology
            began with a deep curiosity about how things work, leading me to
            explore everything from circuit design to building modern web
            applications.
          </p>

          <p className="text-base text-justify leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
            With expertise spanning software development, hardware integration,
            and automotive technologies, I bring a well-rounded perspective to
            every project. I strive to create solutions that are not only highly
            functional but also elegant, intuitive, and user-focused.
          </p>

          <p className="text-base text-justify leading-relaxed mb-8 text-gray-700 dark:text-gray-300">
            Beyond coding, I enjoy experimenting with emerging technologies,
            contributing to open-source projects, and constantly expanding my
            skills through hands-on learning. I am always motivated to embrace
            new challenges and collaborate with professionals who share the same
            passion for innovation.
          </p>

          <div className="flex flex-wrap gap-4 ">
            <span className="px-4 py-2 bg-teal-300/20 text-teal-900 dark:bg-cyan-300/20 dark:text-teal-400 rounded-full text-sm font-semibold">
               Adaptability
            </span>
            <span className="px-4 py-2 bg-teal-300/20 text-teal-800 dark:bg-cyan-300/20 dark:text-teal-400 rounded-full text-sm font-semibold">
              Collaboration
            </span>
            <span className="px-4 py-2 bg-teal-300/20 text-teal-800 dark:bg-cyan-300/20 dark:text-teal-400 rounded-full text-sm font-semibold">
              PC Building
            </span>
            <span className="px-4 py-2 bg-teal-300/20 text-teal-800 dark:bg-cyan-300/20 dark:text-teal-400 rounded-full text-sm font-semibold">
              Teamwork
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
