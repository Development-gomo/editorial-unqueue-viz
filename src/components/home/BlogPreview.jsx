import { SectionHeader } from "@/components/sections/SectionHeader";
import { BlogCard } from "@/components/cards/BlogCard";
import { useWpData } from "@/hooks/useWpData";

export function BlogPreview() {
  const blogData = useWpData("blog");
  const blogPosts = blogData?.preview ?? [];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="From The Blog"
          title="Insights &"
          accent="perspectives"
          link="/blog"
          linkText="All Articles"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
