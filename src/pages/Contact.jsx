import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";

const Contact = () => {
  return (
    <main className="min-w-[320px]">
      <Navigation />

      <PageHeader
        title="Let's"
        accent="Talk"
        description="Have a project in mind? We'd love to hear about it. Let's create something bold together."
        variant="primary"
      />

      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
