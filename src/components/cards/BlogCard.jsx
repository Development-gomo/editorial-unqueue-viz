import { Link } from "react-router-dom";
import { Calendar, ArrowUpRight } from "lucide-react";

/**
 * Standard blog post card.
 */
export function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="group">
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
        <p className="text-muted-foreground line-clamp-2 leading-relaxed">{post.excerpt}</p>
      </article>
    </Link>
  );
}

/**
 * Featured (large) blog post card.
 */
export function FeaturedBlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="group block">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-card shadow-elegant">
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto">
          <img
            src={post.image}
            alt={post.title}
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
              {post.category}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{post.excerpt}</p>
          <span className="font-sans text-sm tracking-wide flex items-center gap-2 text-primary">
            Read Article
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
