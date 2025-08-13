import { CheckCircle } from "lucide-react";

export default function Internships() {
  const internships = [
    {
      company: "Google",
      role: "Software Engineering Intern",
      period: "Summer 2023 | Mountain View, CA",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      achievements: [
        "Developed scalable microservices using Go and Kubernetes",
        "Implemented machine learning algorithms for search optimization",
        "Collaborated with cross-functional teams on cloud infrastructure",
        "Achieved 25% performance improvement in search response time"
      ]
    },
    {
      company: "Microsoft",
      role: "Full-Stack Developer Intern",
      period: "Summer 2022 | Redmond, WA",
      logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      achievements: [
        "Built responsive web applications using React and TypeScript",
        "Designed RESTful APIs with .NET Core and Azure SQL Database",
        "Implemented automated testing and CI/CD pipelines",
        "Contributed to Azure DevOps platform improvements"
      ]
    },
    {
      company: "Tesla",
      role: "Automotive Software Intern",
      period: "Spring 2022 | Palo Alto, CA",
      logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      achievements: [
        "Developed embedded software for vehicle control systems",
        "Worked on autonomous driving sensor integration",
        "Optimized battery management system algorithms",
        "Contributed to over-the-air update infrastructure"
      ]
    },
    {
      company: "Amazon Web Services",
      role: "Cloud Engineering Intern",
      period: "Fall 2021 | Seattle, WA",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
      achievements: [
        "Designed serverless architectures using Lambda and API Gateway",
        "Implemented monitoring and logging solutions with CloudWatch",
        "Optimized database performance on RDS and DynamoDB",
        "Contributed to cost optimization strategies for enterprise clients"
      ]
    }
  ];

  return (
    <section id="internships" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-primary-600/5"></div>
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
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
                  className="w-16 h-16 rounded-lg object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{internship.role}</h3>
                  <p className="text-primary font-semibold">{internship.company}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{internship.period}</p>
                </div>
              </div>

              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {internship.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
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
