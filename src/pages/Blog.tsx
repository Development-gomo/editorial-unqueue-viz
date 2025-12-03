import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "The Future of Brand Identity in a Digital World",
    excerpt: "Exploring how brands can maintain authenticity while embracing digital transformation and new technologies.",
    date: "Dec 1, 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "Design Systems: Building for Scale",
    excerpt: "How to create design systems that grow with your organization and maintain consistency.",
    date: "Nov 28, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "The Art of Creative Direction",
    excerpt: "What it takes to lead creative teams and deliver exceptional work consistently.",
    date: "Nov 25, 2024",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
  {
    id: 4,
    title: "Motion Design Trends 2025",
    excerpt: "A look at the emerging trends in motion design and animation for the coming year.",
    date: "Nov 20, 2024",
    category: "Motion",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    id: 5,
    title: "UX Writing That Converts",
    excerpt: "How strategic microcopy can dramatically improve user experience and conversion rates.",
    date: "Nov 15, 2024",
    category: "UX",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    id: 6,
    title: "Color Psychology in Design",
    excerpt: "Understanding how color influences perception and decision-making in digital products.",
    date: "Nov 10, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?w=800&q=80",
  },
];

const Blog = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <main className="min-w-[320px]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            Insights &
            <br />
            <span className="text-primary">Ideas</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Thoughts on design, creativity, and building brands that matter.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-8 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <Link to={`/blog/${featuredPost.id}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card shadow-elegant">
                <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-sans text-xs tracking-wide">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-sans text-xs tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <span className="font-sans text-sm tracking-wide flex items-center gap-2 text-primary">
                    Read Article
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} className="group">
                <article>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-sans text-xs tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
