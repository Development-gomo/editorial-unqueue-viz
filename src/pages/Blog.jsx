import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { BlogCard, FeaturedBlogCard } from "@/components/cards/BlogCard";
import { useWpData } from "@/hooks/useWpData";

const Blog = () => {
  const blogData = useWpData("blog");
  const posts = blogData?.all ?? [];
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <PageHeader
        title="Insights &"
        accent="Ideas"
        description="Thoughts on design, creativity, and building brands that matter."
      />

      {featuredPost && (
        <section className="pb-8 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <FeaturedBlogCard post={featuredPost} />
          </div>
        </section>
      )}

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
