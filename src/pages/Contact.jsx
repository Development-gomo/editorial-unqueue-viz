import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import contactData from "@/data/contact.json";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    e.target.reset();
  };

  return (
    <main className="min-w-[320px]">
      <Navigation />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none">
            Let's
            <br />
            <span className="text-accent">Talk</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/70 max-w-xl leading-relaxed">
            Have a project in mind? We'd love to hear about it. Let's create
            something bold together.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Start a <span className="text-primary">Project</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-sans text-sm text-muted-foreground">Name *</label>
                    <Input
                      required
                      placeholder="Your name"
                      className="h-12 rounded-xl border-border bg-muted/50 focus:bg-card focus:border-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-sans text-sm text-muted-foreground">Email *</label>
                    <Input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="h-12 rounded-xl border-border bg-muted/50 focus:bg-card focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-muted-foreground">Company</label>
                  <Input
                    placeholder="Your company"
                    className="h-12 rounded-xl border-border bg-muted/50 focus:bg-card focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-muted-foreground">Project Type</label>
                  <select className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 font-sans focus:bg-card focus:border-primary focus:outline-none transition-all">
                    {contactData.projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-sm text-muted-foreground">
                    Tell us about your project *
                  </label>
                  <Textarea
                    required
                    placeholder="Describe your project, goals, and timeline..."
                    className="min-h-[160px] rounded-xl border-border bg-muted/50 focus:bg-card focus:border-primary resize-none transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  variant="magenta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <ArrowUpRight className="w-5 h-5" />
                </Button>
              </form>
            </div>

            <div className="lg:pl-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                Get in <span className="text-primary">Touch</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm text-muted-foreground mb-1">Email</h3>
                    <a href={`mailto:${contactData.info.email}`} className="text-lg hover:text-primary transition-colors">
                      {contactData.info.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm text-muted-foreground mb-1">Phone</h3>
                    <a href={`tel:${contactData.info.phone}`} className="text-lg hover:text-primary transition-colors">
                      {contactData.info.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm text-muted-foreground mb-1">Office</h3>
                    <p className="text-lg">
                      {contactData.info.address.line1}
                      <br />
                      {contactData.info.address.line2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 aspect-[4/3] rounded-2xl relative overflow-hidden">
                <img
                  src={contactData.info.mapImage}
                  alt="Office location"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
