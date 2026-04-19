import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useWpData } from "@/hooks/useWpData";

export function VideoHero() {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-secondary">
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
        <source src={heroData.videoUrl} type="video/mp4" />
      </video>

      <div className="absolute inset-0 video-overlay" />

      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 md:px-8">
        <div className="max-w-5xl">
          <div
            className={`overflow-hidden mb-8 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            <p
              className="font-sans text-sm md:text-base tracking-widest text-cloud-white/70 animate-reveal-up"
              style={{ animationDelay: "0.2s" }}
            >
              {heroData.tagline}
            </p>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-[0.95] tracking-tight text-cloud-white">
            {heroData.headline.map((line, i) => (
              <span
                key={i}
                className={`block overflow-hidden ${isLoaded ? "opacity-100" : "opacity-0"}`}
              >
                <span
                  className={`block animate-reveal-up ${i === heroData.accentLine ? "text-accent" : ""}`}
                  style={{ animationDelay: `${0.4 + i * 0.2}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div
            className={`flex flex-col sm:flex-row gap-4 mt-12 md:mt-14 transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {heroData.cta.map((btn, i) => (
              <Button
                key={btn.text}
                variant={btn.variant}
                size="lg"
                asChild
                className={`animate-reveal-up ${btn.variant === "glass" ? "text-cloud-white border-cloud-white/20 hover:bg-cloud-white/10" : ""}`}
                style={{ animationDelay: `${1 + i * 0.1}s` }}
              >
                <Link to={btn.href}>
                  {btn.text}
                  {i === 0 && <ArrowUpRight className="w-5 h-5" />}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3 text-cloud-white/60 animate-bounce-subtle">
          <span className="text-xs tracking-widest font-sans">{heroData.scrollText}</span>
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>

      <div className="absolute top-1/3 right-12 md:right-20 z-10 hidden lg:block">
        <div className="w-20 h-20 rounded-full border border-accent/30 animate-pulse-glow" />
        <div className="w-12 h-12 rounded-full border border-cloud-white/20 absolute -bottom-8 -left-8 float" />
      </div>
    </section>
  );
}
