import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Brand Identity in a Digital World",
    excerpt: "Exploring how brands can maintain authenticity while embracing digital transformation.",
    date: "Dec 1, 2024",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
  },
  {
    id: 2,
    title: "Design Systems: Building for Scale",
    excerpt: "How to create design systems that grow with your organization.",
    date: "Nov 28, 2024",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: 3,
    title: "The Art of Creative Direction",
    excerpt: "What it takes to lead creative teams and deliver exceptional work.",
    date: "Nov 25, 2024",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
  },
];

export function BlogPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div>
            <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
              From The Blog
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Insights &
              <br />
              <span className="text-primary">perspectives</span>
            </h2>
          </div>
          <Link
            to="/blog"
            className="group font-sans text-sm tracking-wide flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            All Articles
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group"
            >
              <article className="h-full">
                {/* Image */}
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

                {/* Content */}
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
