import { useState } from "react";
import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    patientType: "child",
    preferredTime: "morning",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="contact-hero" data-section="contact-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="Contact Stillwater Orthodontics"
          title="We Are Here to Help You Begin Your Smile Journey"
          description="Have questions or ready to request your complimentary orthodontic consultation? Reach out to our friendly team today."
          primaryButton={{ text: "Request a Consultation", href: "#form" }}
          secondaryButton={{ text: "Your First Visit", href: "/first-visit" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/contact/contact.avif"
        />
      </div>

      <div id="contact-main" data-section="contact-main" className="py-20 w-content-width mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Practice Info Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary-cta font-medium">Reach Out</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Stillwater Orthodontics</h2>
              <p className="text-base text-foreground/80 mt-3 leading-relaxed">
                Combining high-end orthodontic excellence with neighborhood warmth. We welcome patients of all ages across our community.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl card border border-border/30">
                <div className="p-3 rounded-lg bg-primary-cta/10 text-primary-cta">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Clinic Address</h3>
                  <p className="text-sm text-foreground/80 mt-1">[Clinic Address, Stillwater]</p>
                  <p className="text-xs text-foreground/60 mt-0.5">Convenient patient parking available on site</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl card border border-border/30">
                <div className="p-3 rounded-lg bg-primary-cta/10 text-primary-cta">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Phone & Text</h3>
                  <p className="text-sm text-foreground/80 mt-1">[Phone Number]</p>
                  <p className="text-xs text-foreground/60 mt-0.5">Call or text for scheduling & emergency questions</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl card border border-border/30">
                <div className="p-3 rounded-lg bg-primary-cta/10 text-primary-cta">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Email Address</h3>
                  <p className="text-sm text-foreground/80 mt-1">[Email Address]</p>
                  <p className="text-xs text-foreground/60 mt-0.5">Prompt responses for general inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl card border border-border/30">
                <div className="p-3 rounded-lg bg-primary-cta/10 text-primary-cta">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">Office Hours</h3>
                  <p className="text-sm text-foreground/80 mt-1">[Monday - Friday: Office Hours]</p>
                  <p className="text-xs text-foreground/60 mt-0.5">Flexible morning & after-school appointment slots</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div id="form" className="lg:col-span-7 p-6 sm:p-10 rounded-2xl card border border-border/40 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Request a Consultation</h2>
            <p className="text-sm text-foreground/80 mb-6">
              Complete the form below to request a complimentary 3D scan and orthodontic consultation.
            </p>

            {formSubmitted ? (
              <div className="py-12 px-6 text-center flex flex-col items-center gap-4 bg-primary-cta/5 rounded-xl border border-primary-cta/20">
                <CheckCircle2 className="w-12 h-12 text-primary-cta animate-bounce" />
                <h3 className="text-xl font-bold text-foreground">Consultation Request Received!</h3>
                <p className="text-sm text-foreground/80 max-w-md">
                  Thank you, <span className="font-semibold">{formData.name || "valued patient"}</span>. Our Stillwater care coordinator will contact you shortly to confirm your preferred date and time.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs text-primary-cta underline font-medium hover:opacity-80"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-foreground/80">Who is the Patient?</label>
                    <select
                      value={formData.patientType}
                      onChange={(e) => setFormData({ ...formData, patientType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                    >
                      <option value="child">Child (Ages 7 - 11)</option>
                      <option value="teen">Teenager (Ages 12 - 17)</option>
                      <option value="young-adult">Young Adult / College</option>
                      <option value="adult">Adult Patient</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Preferred Time of Day</label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                  >
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Early Afternoon (12:00 PM - 3:00 PM)</option>
                    <option value="after-school">After School / Late Afternoon (3:00 PM - 5:30 PM)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-foreground/80">Notes or Specific Goals (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your smile goals, interested treatments (aligners, braces), or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-background text-foreground text-sm focus:outline-none focus:border-primary-cta"
                  />
                </div>

                <Button
                  text="Request a Consultation"
                  variant="primary"
                  animate={false}
                  className="w-full mt-2"
                />
              </form>
            )}
          </div>

        </div>
      </div>
    </StyleProvider>
  );
}
