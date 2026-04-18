/**
 * Two-column story section: heading on left, paragraphs on right.
 */
export function StorySection({ eyebrow, title, accent, paragraphs }) {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {eyebrow && (
              <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              {title} {accent && <span className="text-primary">{accent}</span>}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
