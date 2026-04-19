import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useWpData } from "@/hooks/useWpData";

export function ContactForm() {
  const contactData = useWpData("contact");
  const projectTypes = contactData?.projectTypes ?? [];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    e.target.reset();
  };

  const inputClass =
    "h-12 rounded-xl border-border bg-muted/50 focus:bg-card focus:border-primary transition-all";

  return (
    <div>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
        Start a <span className="text-primary">Project</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-sans text-sm text-muted-foreground">Name *</label>
            <Input required placeholder="Your name" className={inputClass} />
          </div>
          <div className="space-y-2">
            <label className="font-sans text-sm text-muted-foreground">Email *</label>
            <Input type="email" required placeholder="your@email.com" className={inputClass} />
          </div>
        </div>
        <div className="space-y-2">
          <label className="font-sans text-sm text-muted-foreground">Company</label>
          <Input placeholder="Your company" className={inputClass} />
        </div>
        <div className="space-y-2">
          <label className="font-sans text-sm text-muted-foreground">Project Type</label>
          <select className="w-full h-12 rounded-xl border border-border bg-muted/50 px-4 font-sans focus:bg-card focus:border-primary focus:outline-none transition-all">
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
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
  );
}
