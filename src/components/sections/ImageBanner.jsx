import { cn } from "@/lib/utils";

/**
 * Full-width image banner with optional gradient overlay.
 */
export function ImageBanner({ image, alt = "", height = "md", overlay = true }) {
  const heights = {
    sm: "h-[40vh]",
    md: "h-[50vh] md:h-[70vh]",
    lg: "h-[70vh] md:h-screen",
  };

  return (
    <section className={cn("relative", heights[height])}>
      <img src={image} alt={alt} className="w-full h-full object-cover" />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      )}
    </section>
  );
}
