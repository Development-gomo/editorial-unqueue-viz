/**
 * Numbered values / features grid.
 */
export function ValuesGrid({ eyebrow, title, accent, values }) {
  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          {eyebrow && (
            <p className="font-sans text-sm tracking-widest text-muted-foreground mb-4">
              {eyebrow}
            </p>
          )}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {title}
            {accent && (
              <>
                <br />
                <span className="text-primary">{accent}</span>
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div
              key={value.number}
              className="bg-card rounded-2xl p-8 md:p-10 shadow-elegant hover-lift"
            >
              <span className="font-display text-6xl md:text-7xl font-extrabold text-primary/20">
                {value.number}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-4 mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
