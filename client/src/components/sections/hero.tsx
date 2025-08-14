import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import photo from "../../assets/images/photo.jpg"

export default function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden geometric-pattern">
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-400/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-teal-500/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-70 right-80 w-16 h-16 bg-teal-500/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute top-10 right-75 w-16 h-16 bg-teal-500/30 rotate-45 animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-teal-500/30 rounded-full animate-float animation-delay-2"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-500/50 rotate-12 animate-pulse-slow animation-delay-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20">
        <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
          <h1 className="text-[50px] lg:text-[70px] font-bold mb-6 leading-tight bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Rogul Jayaraman
          </h1>
          <p className="text-xl lg:text-2xl font-bold mb-4 text-gray-600 dark:text-gray-300/90">
            Full-Stack Developer
          </p>
          <p className="text-base text-justify mb-8 text-gray-500 dark:text-gray-400 max-w-md">
            Passionate about crafting modern, high-performance web applications that blend functionality, performance, and design into seamless user experiences
          </p>
          <Button
            onClick={scrollToAbout}
            className="ButtonFill"
          >
            Know More
            <ArrowRight />
          </Button>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <img
              src={photo}
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
