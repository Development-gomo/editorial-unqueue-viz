import { Link } from "react-router-dom";
import { ArrowUpRight, Calendar } from "lucide-react";
import blogData from "@/data/blog.json";

export function BlogPreview() {
  const blogPosts = blogData.preview;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group">
              <article className="h-full">
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
