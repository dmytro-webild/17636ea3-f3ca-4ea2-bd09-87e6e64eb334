import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import MetricsIconCards from "@/components/sections/metrics/MetricsIconCards";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function FirstVisitPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="first-visit-hero" data-section="first-visit-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="Your First Visit"
          title="What to Expect at Your Complimentary Orthodontic Consultation"
          description="Your first visit is all about you. 

We'll explore your smile goals, answer your questions, and provide complimentary photos,         X-rays, and a 3D digital scan. No pressure, just personalized guidance and a clear path forward."
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/hero/hero1.avif"
        />
      </div>

      <div id="visit-steps" data-section="visit-steps">
        <FeaturesDetailedSteps
          textAnimation="slide-up"
          tag="Step-by-Step Experience"
          title="Your First Appointment in Four Easy Steps"
          description="Here is exactly what happens during your complimentary initial visit at Stillwater Orthodontics."
          layout="horizontal"
          steps={[
            {
              tag: "Step 1",
              title: "01",
              subtitle: "Warm Hospitality & Tour",
              description: "Our team welcomes you, answers initial questions, and gives your family a brief tour of our modern office.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif?_wi=2",
            },
            {
              tag: "Step 2",
              title: "02",
              subtitle: "Mess-Free 3D Digital Scan",
              description: "We create an exact 3D digital model of your teeth and jaws in under 3 minutes with zero gooey impressions.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif?_wi=2",
            },
            {
              tag: "Step 3",
              title: "03",
              subtitle: "Specialist Exam & Options",
              description: "Our orthodontist examines your bite alignment, reviews your 3D digital images, and explains clear treatment options.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif?_wi=1",
            },
            {
              tag: "Step 4",
              title: "04",
              subtitle: "Custom Plan & Financing",
              description: "We review your personalized timeline, transparent pricing, insurance, and 0% interest payment options so you can decide with confidence.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/contact/contact.avif?_wi=2",
            },
          ]}
        />
      </div>

      <div id="first-visit-checklist" data-section="first-visit-checklist">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Patient Checklist"
          title="How to Prepare for Your Consultation"
          description="Everything you need for a smooth, productive first appointment."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "What to Bring to Your Appointment",
              description: "No need to worry about what to bring just yet! Once your consultation is booked, our receptionist will reach out with all the details you’ll need for your visit.",
              centerIcon: "CheckCircle",
              marqueeTexts: ["Insurance Details", "Online Patient Form", "List of Questions", "Parent for Minors"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Zero Pressure Guarantee",
              description: "Your initial examination and 3D scans are 100% complimentary with no obligation to start treatment on the spot.",
              infoCards: [
                { icon: "ShieldCheck", label: "Cost", value: "100% Free Consultation" },
                { icon: "Sparkles", label: "Diagnostics", value: "3D Digital Scanning" },
                { icon: "HeartHandshake", label: "Financing", value: "0% Interest Options" },
              ],
            },
          ]}
        />
      </div>

      <div id="financial-simplicity" data-section="financial-simplicity">
        <MetricsIconCards
          textAnimation="slide-up"
          tag="Financial Peace of Mind"
          title="Transparent Pricing & Flexible Payment Options"
          description="We believe financial considerations should never stand between your family and a healthy, confident smile."
          metrics={[
            {
              icon: "ShieldCheck",
              title: "Initial Consultation Fee",
              value: "$0",
            },
            {
              icon: "HeartHandshake",
              title: "In-House Financing",
              value: "0% Int.",
            },
            {
              icon: "CreditCard",
              title: "No credit check",
              value: "No pressure",
            },
          ]}
        />
      </div>

      <div id="first-visit-faq" data-section="first-visit-faq">
        <FaqTwoColumn
          textAnimation="slide-up"
          tag="First Visit FAQs"
          title="Frequently Asked Questions About Your First Visit"
          description="Answers to common questions before coming to Stillwater Orthodontics."
          items={[
            {
              question: "How long will my initial consultation take?",
              answer: "Plan for approximately 45 to 60 minutes. This gives us ample time for your 3D digital scan, specialist exam, and a thorough discussion of financing and options.",
            },
            {
              question: "Will I get braces or aligners on the same day as my first visit?",
              answer: "While your initial visit is primarily diagnostic and consultative, in many cases we can accommodate 'Same-Day Starts' if you are eager to begin right away!",
            },
            {
              question: "Are 3D digital scans safe for children?",
              answer: "Yes! Our intraoral 3D scanners use safe optical light cameras — similar to taking a series of digital photos — with zero radiation or discomfort.",
            },
            {
              question: "What if I don't have orthodontic dental insurance?",
              answer: "Many of our patients do not have orthodontic insurance. We provide affordable, interest-free monthly financing plans directly through our office.",
            },
          ]}
        />
      </div>

      <div id="first-visit-cta" data-section="first-visit-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Schedule Today"
          text="Ready to Request Your Complimentary First Visit?"
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "For Families", href: "/for-families" }}
        />
      </div>
    </StyleProvider>
  );
}
