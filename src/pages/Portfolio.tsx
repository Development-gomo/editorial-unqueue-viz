import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const categories = ["All", "Branding", "Web Design", "Digital", "Motion"];

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    size: "large",
  },
  {
    id: 2,
    title: "Urban Flow",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
    size: "small",
  },
  {
    id: 3,
    title: "Minimal Wave",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?w=800&q=80",
    size: "small",
  },
  {
    id: 4,
    title: "Future Tech",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    size: "large",
  },
  {
    id: 5,
    title: "Pulse",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=800&q=80",
    size: "small",
  },
  {
    id: 6,
    title: "Echo",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?w=800&q=80",
    size: "large",
  },
  {
    id: 7,
    title: "Vertex",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&q=80",
    size: "small",
  },
  {
    id: 8,
    title: "Nova",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    size: "small",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-w-[320px]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            Our
            <br />
            <span className="text-primary">Work</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            A curated collection of our finest projects. Each piece represents our
            commitment to bold, innovative design.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/case-study/${project.id}`}
                className={cn(
                  "group relative rounded-2xl overflow-hidden",
                  project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                )}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-700",
                      hoveredId === project.id ? "scale-110" : "scale-100"
                    )}
                  />

                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent transition-opacity duration-500",
                      hoveredId === project.id ? "opacity-90" : "opacity-60"
                    )}
                  />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p
                      className={cn(
                        "font-sans text-xs tracking-widest text-cloud-white/70 mb-2 transition-all duration-300",
                        hoveredId === project.id ? "translate-y-0 opacity-100" : "translate-y-2 opacity-70"
                      )}
                    >
                      {project.category}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-cloud-white flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight
                        className={cn(
                          "w-6 h-6 transition-all duration-300",
                          hoveredId === project.id
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-2"
                        )}
                      />
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
