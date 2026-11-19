import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesGridSplit from "@/components/sections/features/FeaturesGridSplit";
import FeaturesComparison from "@/components/sections/features/FeaturesComparison";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function TreatmentsPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="treatments-hero" data-section="treatments-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="Orthodontic Treatments"
          title="Advanced Smile Engineering Tailored to Your Lifestyle"
          description="From virtually invisible clear aligners to ultra-sleek ceramic and metal braces, we offer the full spectrum of modern orthodontic care designed for maximum comfort and lasting results."
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Your First Visit", href: "/first-visit" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif?_wi=5"
        />
      </div>

      <div id="treatment-list" data-section="treatment-list">
        <FeaturesGridSplit
          textAnimation="slide-up"
          tag="Our Solutions"
          title="Comprehensive Orthodontic Options for Every Age"
          description="Explore our specialized treatment modalities, each customized using precision 3D digital planning."
          topItems={[
            {
              title: "Discreet Clear Aligners",
              description: "Custom-molded transparent aligners that gently straighten teeth without wires or brackets. Removable for easy eating, brushing, and special occasions.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif?_wi=6",
            },
            {
              title: "Sleek Ceramic & Clear Braces",
              description: "Tooth-colored ceramic brackets that blend seamlessly with your natural tooth shade, delivering high aesthetic appeal with high structural strength.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service1.avif?_wi=3",
            },
          ]}
          bottomItem={{
            title: "Modern Low-Profile Braces & Phase I Guidance",
            description: "Engineered with smaller, smoother brackets and shape-memory archwires for faster tooth movement and proactive early pediatric jaw guidance.",
            imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif?_wi=3",
            primaryButton: { text: "Book a Consultation Now", href: "/contact" },
          }}
        />
      </div>

      <div id="aligners-vs-braces" data-section="aligners-vs-braces">
        <FeaturesComparison
          textAnimation="slide-up"
          tag="Treatment Comparison"
          title="Choosing Between Clear Aligners and Modern Braces"
          description="Both options produce healthy, radiant smiles. Compare key advantages to find your best fit."
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          negativeItems={[
            "Traditional messy putty impressions (We use 100% digital 3D scans)",
            "Bulky, sharp bracket designs (We use low-profile, smooth contour appliances)",
            "Unclear pricing or hidden fees (We provide transparent all-inclusive quotes)",
            "Rigid, inflexible payment terms (We offer 0% interest monthly financing)",
          ]}
          positiveItems={[
            "Virtually invisible clear aligners removable for meals and sports",
            "Tooth-colored ceramic brackets that blend with natural enamel",
            "3D digital smile simulation before treatment begins",
            "Fewer emergency visits with advanced shape-memory archwires",
          ]}
        />
      </div>

      <div id="tech-advantages" data-section="tech-advantages">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Digital Precision"
          title="Technology That Enhances Your Comfort"
          description="Our modern orthodontic tools ensure faster appointments, accurate diagnostics, and predictable smile transformations."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "3D Digital Imaging & Scans",
              description: "Replaces outdated impression trays with a fast, comfortable optical camera scan.",
              centerIcon: "Sparkles",
              marqueeTexts: ["Fast Optical Scanning", "Sub-Millimeter Accuracy", "Zero Messy Putty", "3D Smile Simulation"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Smile Preservation & Retention",
              description: "Custom digital retainers engineered to protect your investment and preserve your smile for life.",
              infoCards: [
                { icon: "ShieldCheck", label: "Retention", value: "Custom Fit" },
                { icon: "Sparkles", label: "Material", value: "Durable Polymer" },
                { icon: "CheckCircle", label: "Guarantee", value: "Lifetime Support" },
              ],
            },
          ]}
        />
      </div>

      <div id="treatment-faq" data-section="treatment-faq">
        <FaqTwoColumn
          textAnimation="slide-up"
          tag="Common Questions"
          title="Frequently Asked Treatment Questions"
          description="Have questions about getting started? Here are clear answers to common patient inquiries."
          items={[
            {
              question: "How long does typical orthodontic treatment take?",
              answer: "Treatment length varies depending on complexity and goals, ranging from 6 to 12 months for mild cases up to 18 to 24 months for comprehensive bite alignment.",
            },
            {
              question: "Are clear aligners as effective as traditional braces?",
              answer: "Yes! Modern clear aligner technology can treat the vast majority of orthodontic cases with identical clinical precision when worn as directed.",
            },
            {
              question: "Does orthodontic treatment hurt?",
              answer: "Most patients experience slight pressure for a few days after adjustments or switching aligners. Advanced light-force wires significantly reduce discomfort.",
            },
            {
              question: "How often will I need to visit the office?",
              answer: "Progress checks are typically scheduled every 6 to 10 weeks, keeping appointments convenient and minimally disruptive to your busy schedule.",
            },
          ]}
        />
      </div>

      <div id="treatment-cta" data-section="treatment-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Find Your Fit"
          text="Let Us Help You Choose the Perfect Option"
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore For Families", href: "/for-families" }}
        />
      </div>
    </StyleProvider>
  );
}
