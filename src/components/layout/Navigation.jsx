import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import navData from "@/data/navigation.json";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass py-3" : "bg-transparent py-5"
        )}
      >
        <nav className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter z-50 relative group"
            >
              <span className="text-foreground transition-colors group-hover:text-primary">
                {navData.logo.text}
              </span>
              <span className="text-primary">{navData.logo.accent}</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navData.links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-display text-sm px-5 py-2.5 rounded-full transition-all duration-300",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to={navData.cta.href}
                className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-display text-sm hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                {navData.cta.text}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-50 relative w-12 h-12 flex items-center justify-center rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/98 backdrop-blur-xl transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col justify-center items-center h-full gap-6">
          {navData.links.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "font-display text-4xl md:text-5xl font-bold text-foreground hover:text-primary transition-all duration-300",
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{
                transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to={navData.cta.href}
            className={cn(
              "mt-6 bg-primary text-primary-foreground px-8 py-4 rounded-full font-display text-lg hover:shadow-glow transition-all duration-300",
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
            style={{
              transitionDelay: isOpen ? `${navData.links.length * 75}ms` : "0ms",
            }}
          >
            {navData.cta.text}
          </Link>
        </div>
      </div>
    </>
  );
}
