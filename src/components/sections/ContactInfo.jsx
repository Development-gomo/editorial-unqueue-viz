import { Mail, Phone, MapPin } from "lucide-react";
import contactData from "@/data/contact.json";

const iconMap = { Mail, Phone, MapPin };

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-sans text-sm text-muted-foreground mb-1">{label}</h3>
        {children}
      </div>
    </div>
  );
}

export function ContactInfo() {
  const { info } = contactData;
  return (
    <div className="lg:pl-8">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
        Get in <span className="text-primary">Touch</span>
      </h2>
      <div className="space-y-6">
        <InfoRow icon={iconMap.Mail} label="Email">
          <a href={`mailto:${info.email}`} className="text-lg hover:text-primary transition-colors">
            {info.email}
          </a>
        </InfoRow>
        <InfoRow icon={iconMap.Phone} label="Phone">
          <a href={`tel:${info.phone}`} className="text-lg hover:text-primary transition-colors">
            {info.phone}
          </a>
        </InfoRow>
        <InfoRow icon={iconMap.MapPin} label="Office">
          <p className="text-lg">
            {info.address.line1}
            <br />
            {info.address.line2}
          </p>
        </InfoRow>
      </div>

      <div className="mt-10 aspect-[4/3] rounded-2xl relative overflow-hidden">
        <img
          src={info.mapImage}
          alt="Office location"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>
    </div>
  );
}
