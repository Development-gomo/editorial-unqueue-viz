import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import blogData from "@/data/blog.json";

const Blog = () => {
  const posts = blogData.all;
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <main className="min-w-[320px]">
      <Navigation />

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
