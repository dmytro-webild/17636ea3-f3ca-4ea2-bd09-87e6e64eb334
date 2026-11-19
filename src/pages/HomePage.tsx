import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplitKpi from "@/components/sections/hero/HeroSplitKpi";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import FeaturesGridSplit from "@/components/sections/features/FeaturesGridSplit";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FeaturesDetailedSteps from "@/components/sections/features/FeaturesDetailedSteps";
import TestimonialMarqueeCards from "@/components/sections/testimonial/TestimonialMarqueeCards";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function HomePage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="hero" data-section="hero">
        <HeroSplitKpi
          textAnimation="slide-up"
          tag="Stillwater Orthodontics"
          title="Transforming Smiles, Building Confidence for Life"
          description="Combining the clinical excellence of a premium orthodontic destination with the warmth, compassion, and accessibility of a neighborhood practice."
          primaryButton={{ text: "Request a Consultation", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/hero/hero1.avif"
          kpis={[
            { value: "100%", label: "Personalized Care" },
            { value: "3D", label: "Digital Scanning" },
            { value: "All Ages", label: "Children, Teens & Adults" },
          ]}
        />
      </div>

      <div id="pillars" data-section="pillars">
        <FeaturesMediaCards
          textAnimation="slide-up"
          tag="The Stillwater Standard"
          title="Care Grounded in Professionalism, Comfort & Innovation"
          description="We believe great orthodontic care goes far beyond creating beautiful smiles. It creates confidence, trust, and positive experiences that last a lifetime."
          items={[
            {
              title: "Exceptional Clinical Professionalism",
              description: "Board-quality clinical expertise utilizing modern diagnostics to deliver gentle, precise, and permanent results for every patient.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif",
            },
            {
              title: "Welcoming & Personalized Experience",
              description: "A warm, compassionate clinic environment where every family feels heard, valued, and comfortably supported throughout their treatment.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif",
            },
          ]}
        />
      </div>

      <div id="treatments-overview" data-section="treatments-overview">
        <FeaturesGridSplit
          textAnimation="slide-up"
          tag="Treatment Options"
          title="Tailored Orthodontic Solutions for Every Stage of Life"
          description="Whether you are seeking early intervention for a child, discreet aligners for a teenager, or subtle options for yourself, we craft treatment plans to match your goals."
          topItems={[
            {
              title: "Discreet Clear Aligners",
              description: "Custom digital aligners providing a virtually invisible, removable alternative to traditional braces for teens and adults.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif",
            },
            {
              title: "Modern Ceramic & Metal Braces",
              description: "Low-profile, sleek brackets engineered for maximum comfort, rapid movement, and customizable aesthetic expression.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service1.avif",
            },
          ]}
          bottomItem={{
            title: "Pediatric & Early Guidance",
            description: "Proactive evaluation around age 7 to monitor jaw development, create room for erupting teeth, and simplify future treatment.",
            imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif",
            primaryButton: { text: "Explore Treatment Options", href: "/treatments" },
            avatarsSrc: [
              "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif",
              "https://storage.googleapis.com/webild/default/templates/skincare/image6.avif",
            ],
            avatarsLabel: "Trusted by 1000+ local families",
          }}
        />
      </div>

      <div id="family-bento" data-section="family-bento">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Designed For Families"
          title="A Modern Orthodontic Experience Built Around You"
          description="From mess-free 3D digital impressions to convenient multi-family scheduling, every detail of Stillwater Orthodontics is engineered for your peace of mind."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "Mess-Free 3D Digital Scans",
              description: "Say goodbye to uncomfortable gooey impressions. Our advanced intraoral scanners capture high-resolution 3D models in seconds.",
              centerIcon: "Sparkles",
              marqueeTexts: ["100% Digital Scans", "Zero Gooey Putty", "Precision 3D Models", "Fast & Comfortable"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Family-Centric Convenience",
              description: "We make life easier for busy parents with synchronized appointments and flexible interest-free monthly payments.",
              infoCards: [
                { icon: "Users", label: "Scheduling", value: "Multi-Child Visits" },
                { icon: "HeartHandshake", label: "Financing", value: "0% Interest In-House" },
                { icon: "ShieldCheck", label: "Consultation", value: "100% Free 3D Exam" },
              ],
            },
          ]}
        />
      </div>

      <div id="process" data-section="process">
        <FeaturesDetailedSteps
          textAnimation="slide-up"
          tag="Your Patient Journey"
          title="Four Simple Steps to a Confident Smile"
          description="We take the mystery out of orthodontics with a seamless, structured process from your initial visit to your final reveal."
          steps={[
            {
              tag: "Step 1",
              title: "01",
              subtitle: "Complimentary Consultation",
              description: "Meet our dedicated care team, explore our modern facility, and discuss your smile goals in a relaxed environment.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif",
            },
            {
              tag: "Step 2",
              title: "02",
              subtitle: "Precision 3D Digital Scan",
              description: "We capture high-definition digital images to analyze bite alignment, jaw structure, and teeth positioning with sub-millimeter precision.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif",
            },
            {
              tag: "Step 3",
              title: "03",
              subtitle: "Customized Treatment Plan",
              description: "Your specialist creates a customized treatment plan detailing expected milestones, estimated duration, and flexible payment arrangements.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif",
            },
            {
              tag: "Step 4",
              title: "04",
              subtitle: "Gentle Care & Radiant Reveal",
              description: "Enjoy comfortable progress checks along your journey until you celebrate your newly aligned, lifelong confident smile.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/hero/hero1.avif",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialMarqueeCards
          textAnimation="slide-up"
          tag="Patient Stories"
          title="Trusted by Families Throughout Our Community"
          description="Read how our compassionate approach and clinical precision have helped patients of all ages smile with genuine confidence."
          testimonials={[
            {
              name: "Parent of Pediatric Patient",
              role: "Parent of 9-year-old",
              quote: "Stillwater made my son feel completely at ease during his early consultation. The team took the time to explain everything in a fun, gentle way.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image5.avif",
            },
            {
              name: "Teen Aligner Patient",
              role: "High School Junior",
              quote: "I was worried about having braces during high school, but clear aligners at Stillwater were practically invisible. My friends didn't even notice!",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image6.avif",
            },
            {
              name: "Adult Orthodontic Patient",
              role: "Working Professional",
              quote: "As an adult patient, I appreciated the efficiency and respect for my time. The clinical results are incredible, and the atmosphere is top-tier.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image7.avif",
            },
            {
              name: "Family of Three Patients",
              role: "Busy Parent",
              quote: "Having two teens and myself in treatment at the same time sounded daunting, but Stillwater's multi-appointment scheduling made it effortless.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/skincare/image8.avif",
            },
          ]}
        />
      </div>

      <div id="consultation-cta" data-section="consultation-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Begin Your Journey"
          text="Ready to Request Your Orthodontic Consultation?"
          primaryButton={{ text: "Request a Consultation", href: "/contact" }}
          secondaryButton={{ text: "Explore Your First Visit", href: "/first-visit" }}
        />
      </div>
    </StyleProvider>
  );
}
