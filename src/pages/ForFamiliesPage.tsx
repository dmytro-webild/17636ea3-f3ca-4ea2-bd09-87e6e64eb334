import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesTwoColumnGrid from "@/components/sections/features/FeaturesTwoColumnGrid";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function ForFamiliesPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="families-hero" data-section="families-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="The Stillwater Difference"
          title="Why Choose Stillwater Orthodontics"
          description="We make orthodontic care approachable, transparent, and hassle-free for your entire family."
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Your First Visit", href: "/first-visit" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif?_wi=2"
        />
      </div>

      <div id="the-difference-grid" data-section="the-difference-grid">
        <FeaturesTwoColumnGrid
          textAnimation="slide-up"
          tag="10 Reasons to Choose Us"
          title="The Stillwater Difference at a Glance"
          description="Everything you need to know about our specialized, stress-free approach to your family's care."
          features={[
            {
              icon: "Award",
              title: "Orthodontic Specialists",
              description: "We have years of specialized training in straightening teeth.",
            },
            {
              icon: "Sparkles",
              title: "Innovative Aesthetic Options",
              description: "We offer treatment options beyond traditional metal braces.",
            },
            {
              icon: "Scan",
              title: "3D Scanning",
              description: "No goopy molds, just a quick digital scan.",
            },
            {
              icon: "Clock",
              title: "Fewer Visits",
              description: "We use smart techniques that cut down appointment times.",
            },
            {
              icon: "Target",
              title: "Digitally Placed Brackets",
              description: "Our precision planning ensures a smoother, faster treatment.",
            },
            {
              icon: "Sliders",
              title: "Customized Treatment Plans",
              description: "Every plan is built around your unique needs.",
            },
            {
              icon: "Wallet",
              title: "Flexible Payment Plans",
              description: "We offer payment options that fit your situation.",
            },
            {
              icon: "ShieldCheck",
              title: "No Hidden Fees",
              description: "Our pricing is transparent for all treatment types.",
            },
            {
              icon: "Video",
              title: "Video Updates",
              description: "We provide quick video or text check-ins for parents.",
            },
            {
              icon: "Users",
              title: "Dentist Collaboration",
              description: "We team up with your dentist for long-term health results.",
            },
          ]}
        />
      </div>

      <div id="family-faq" data-section="family-faq">
        <FaqTwoColumn
          textAnimation="slide-up"
          tag="Parent FAQs"
          title="Frequently Asked Questions for Parents"
          description="Everything parents need to know about starting their children on the path to a healthy smile."
          items={[
            {
              question: "Why should my child see an orthodontist at age 7 if they still have baby teeth?",
              answer: "An early checkup lets us evaluate jaw growth and emerging permanent teeth. Most 7-year-olds do not need immediate treatment, but monitoring early prevents complex issues down the road.",
            },
            {
              question: "Will orthodontic treatment interfere with sports or musical instruments?",
              answer: "Not at all! We provide custom sports mouthguards designed to fit comfortably over braces, and aligner options make playing wind instruments completely hassle-free.",
            },
            {
              question: "How do you assist with insurance and payment plans?",
              answer: "We verify your insurance benefits prior to your consultation and file claims directly on your behalf. We also offer flexible, interest-free monthly payments.",
            },
            {
              question: "Can parents sit with their child during appointments?",
              answer: "Absolutely. Parents are always welcome in the clinical care area to observe progress and ask questions with our orthodontic team.",
            },
          ]}
        />
      </div>

      <div id="family-cta" data-section="family-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Family Consultations"
          text="Schedule Your Family's First Visit Today"
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Teen Care", href: "/for-teens-young-adults" }}
        />
      </div>
    </StyleProvider>
  );
}
