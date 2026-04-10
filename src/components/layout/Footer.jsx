import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";
import footerData from "@/data/footer.json";
import navData from "@/data/navigation.json";

const iconMap = { Instagram, Twitter, Linkedin, Dribbble };

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10">
              Let's create
              <br />
              <span className="text-primary">something bold</span>
              <br />
              together.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-display text-base hover:shadow-glow-accent hover:-translate-y-1 transition-all duration-300"
            >
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-extrabold tracking-tighter">
              BOLD<span className="text-primary">*</span>
            </Link>
            <p className="mt-5 text-secondary-foreground/60 max-w-md leading-relaxed">
              {footerData.brand.description}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest mb-6 text-secondary-foreground/40">
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerData.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest mb-6 text-secondary-foreground/40">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {footerData.social.map((social) => {
                const Icon = iconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label={social.name}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} BOLD Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/40">
            {footerData.legal.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
