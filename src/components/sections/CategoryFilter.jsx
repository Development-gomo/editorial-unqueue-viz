import { cn } from "@/lib/utils";

/**
 * Reusable pill-style category filter.
 */
export function CategoryFilter({ categories, active, onChange }) {
  return (
    <section className="py-6 bg-background border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onChange(category)}
              className={cn(
                "font-sans text-sm px-5 py-2.5 rounded-full transition-all duration-300",
                active === category
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
  );
}
