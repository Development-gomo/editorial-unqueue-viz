import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Work", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

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
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-2xl md:text-3xl font-extrabold tracking-tighter z-50 relative"
            >
              <span className="text-foreground">BOLD</span>
              <span className="text-magenta">*</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-display text-sm uppercase tracking-widest relative group",
                    location.pathname === link.href
                      ? "text-magenta"
                      : "text-foreground"
                  )}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-magenta transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 bg-foreground text-background px-6 py-3 font-display text-sm uppercase tracking-widest hover:bg-magenta transition-colors duration-300 flex items-center gap-2"
              >
                Let's Talk
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-50 relative w-12 h-12 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background transition-transform duration-500 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col justify-center items-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground hover:text-magenta transition-colors duration-300"
              style={{
                animationDelay: isOpen ? `${index * 100}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 bg-magenta text-primary-foreground px-8 py-4 font-display text-lg uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </>
  );
}
