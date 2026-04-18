/**
 * Case study description + challenge/solution block.
 */
export function CaseStudyContent({ description, challenge, solution }) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed">
            {description}
          </p>
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The <span className="text-primary">Challenge</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{challenge}</p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                The <span className="text-primary">Solution</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Image gallery for case study.
 */
export function ImageGallery({ images, title = "" }) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={image}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
