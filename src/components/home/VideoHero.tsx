import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-secondary">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000000' width='1920' height='1080'/%3E%3C/svg%3E"
      >
        <source
          src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-08T10-52-41.402Z-jeton-homepage-hd2.mp4#t=0.01"
          type="video/mp4"
        />
      </video>

      {/* Orange Gradient Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 md:px-8">
        <div className="max-w-5xl">
          {/* Tagline */}
          <div
            className={`overflow-hidden mb-6 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p
              className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-cloud-white/80 animate-reveal-up"
              style={{ animationDelay: "0.2s" }}
            >
              Creative Agency • Digital Rebels • Brand Architects
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.9] tracking-tighter text-cloud-white">
            <span
              className={`block overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <span
                className="block animate-reveal-up"
                style={{ animationDelay: "0.4s" }}
              >
                We Create
              </span>
            </span>
            <span
              className={`block overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <span
                className="block text-accent animate-reveal-up"
                style={{ animationDelay: "0.6s" }}
              >
                Bold Digital
              </span>
            </span>
            <span
              className={`block overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
              <span
                className="block animate-reveal-up"
                style={{ animationDelay: "0.8s" }}
              >
                Experiences
              </span>
            </span>
          </h1>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mt-10 md:mt-12 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <Button variant="hero" size="lg" asChild className="animate-reveal-up" style={{ animationDelay: "1s" }}>
              <Link to="/portfolio">
                View Our Work
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-cloud-white text-cloud-white hover:bg-cloud-white hover:text-secondary animate-reveal-up"
              style={{ animationDelay: "1.1s" }}
            >
              <Link to="/contact">Start a Project</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-cloud-white/70 animate-bounce-subtle">
          <span className="text-xs uppercase tracking-widest font-display">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-8 md:right-16 z-10 hidden lg:block">
        <div className="w-24 h-24 border-2 border-accent rotate-45 animate-pulse-glow" />
      </div>
    </section>
  );
}
