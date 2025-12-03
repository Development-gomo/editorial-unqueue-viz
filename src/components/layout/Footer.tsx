import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Dribbble } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Dribbble", icon: Dribbble, href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
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

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-extrabold tracking-tighter">
              BOLD<span className="text-primary">*</span>
            </Link>
            <p className="mt-5 text-secondary-foreground/60 max-w-md leading-relaxed">
              We are a creative agency that believes in the power of bold ideas.
              We create digital experiences that challenge conventions and inspire action.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm tracking-widest mb-6 text-secondary-foreground/40">
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.navigation.map((link) => (
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

          {/* Social */}
          <div>
            <h3 className="font-display text-sm tracking-widest mb-6 text-secondary-foreground/40">
              Follow Us
            </h3>
            <div className="flex gap-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-11 h-11 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-secondary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} BOLD Agency. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/40">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
