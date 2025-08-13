import { Trophy, Medal, Code, Lightbulb, Users, Rocket, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "Hackathon Winner",
      subtitle: "TechCrunch Disrupt 2023",
      description: "First place winner for developing an innovative IoT solution for smart cities. Led a team of 4 developers to create a comprehensive urban monitoring system.",
      delay: 0
    },
    {
      icon: Medal,
      title: "Dean's List",
      subtitle: "University Excellence Award",
      description: "Achieved Dean's List recognition for four consecutive semesters with a GPA of 3.9/4.0. Recognized for outstanding academic performance and leadership.",
      delay: 1
    },
    {
      icon: Code,
      title: "Open Source Contributor",
      subtitle: "GitHub Recognition",
      description: "Active contributor to popular open-source projects with over 500+ contributions. Maintained several libraries with 10k+ downloads and positive community feedback.",
      delay: 2
    },
    {
      icon: Lightbulb,
      title: "Innovation Award",
      subtitle: "Tech Innovation Summit",
      description: "Received innovation award for developing a revolutionary automotive diagnostic tool that reduces diagnostic time by 60% and improves accuracy.",
      delay: 0.5
    },
    {
      icon: Users,
      title: "Community Leadership",
      subtitle: "Tech Community Leader",
      description: "Founded and led a local tech meetup group with 500+ members. Organized monthly workshops, coding bootcamps, and networking events for the developer community.",
      delay: 1.5
    },
    {
      icon: Rocket,
      title: "Startup Success",
      subtitle: "Entrepreneur Recognition",
      description: "Co-founded a successful tech startup that achieved $1M+ in revenue within the first year. Led product development and technical architecture decisions.",
      delay: 3
    }
  ];

  return (
    <section id="achievements" className="py-20 geometric-pattern relative overflow-hidden">
      <div className="absolute top-16 left-16 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-24 w-16 h-16 bg-primary-600/25 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-cyan-400/20 rounded-full animate-float animation-delay-2"></div>
      <div className="absolute bottom-24 right-16 w-24 h-24 bg-primary/15 rotate-12 animate-pulse-slow animation-delay-1"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
          Achievements & Awards
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: `-${achievement.delay}s` }}
              >
                <div className="text-center mb-4">
                  <div className="bg-gradient-to-br from-primary to-primary-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-primary font-semibold text-sm">{achievement.subtitle}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm text-center mb-4">
                  {achievement.description}
                </p>

                <div className="text-center">
                  <button className="bg-primary/20 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/30 transition-colors duration-200">
                    <ExternalLink className="inline-block mr-2 h-4 w-4" />
                    View Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
