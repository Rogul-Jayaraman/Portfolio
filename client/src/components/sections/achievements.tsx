import { Trophy, Medal, Code, Lightbulb, Users, Rocket, ExternalLink } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
    icon: Trophy,
    title: "Winner - Product Expo",
    subtitle: "BIT V-PRAYUKTI 2025, Bannari Amman Institute of Technology",
    description:
      "Won first place in the Product Expo for presenting an innovative tech solution. Event held on Feb 8, 2025.",
    delay: 1
  },
    {
    icon: Lightbulb,
    title: "Runner-up - PC Building",
    subtitle: "CRYPTERA 2025, Coimbatore Institute of Technology",
    description:
      "Secured runner-up position in the PC Building competition, for building a PC and booting it. Event held on Feb 21, 2025.",
    delay: 2
  },
  ];

  return (
    <section id="achievements" className="py-20 pb-32 geometric-pattern relative overflow-hidden">
      <div className="absolute top-16 left-16 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-32 right-24 w-16 h-16 bg-primary-600/25 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-32 w-12 h-12 bg-cyan-400/20 rounded-full animate-float animation-delay-2"></div>
      <div className="absolute bottom-24 right-16 w-24 h-24 bg-primary/15 rotate-12 animate-pulse-slow animation-delay-1"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="Heading">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="glassmorphism bg-white/60 dark:bg-gray-800/60 rounded-2xl p-6 hover:scale-105 transition-transform duration-300 animate-float"
                style={{ animationDelay: `-${achievement.delay}s` }}
              >
                <div className="text-center mb-4">
                  <div className=" bg-gradient-to-r from-cyan-600/80 to-teal-600/80 dark:text-gray-950 text-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-white/90 h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent font-semibold text-sm">{achievement.subtitle}</p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm text-center mb-4">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
