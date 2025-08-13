import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary-600/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-cyan-400/25 rounded-full animate-float animation-delay-2"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/15 rotate-12 animate-pulse-slow animation-delay-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-600 dark:text-gray-400">
            Full-Stack Developer & Tech Enthusiast
          </p>
          <p className="text-lg mb-10 text-gray-500 dark:text-gray-500 max-w-md">
            Passionate about creating innovative solutions that bridge the gap between hardware and software technologies.
          </p>
          <Button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-primary to-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 glassmorphism"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Know More
          </Button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500"
              alt="Professional headshot"
              className="w-80 h-80 rounded-full object-cover shadow-2xl animate-float border-4 border-white/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary-600/20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
