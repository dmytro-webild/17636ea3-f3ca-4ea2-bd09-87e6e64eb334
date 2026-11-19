import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import MetricsIconCards from "@/components/sections/metrics/MetricsIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function AboutPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="about-hero" data-section="about-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="About Stillwater Orthodontics"
          title="Where Destination Clinical Care Meets Neighborhood Warmth"
          description="Stillwater Orthodontics was founded on a simple belief: orthodontic treatment should be an empowering, positive, and deeply personalized milestone for every child, teenager, and adult."
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif?_wi=1"
        />
      </div>

      <div id="our-story" data-section="our-story">
        <AboutTextSplit
          textAnimation="slide-up"
          title="Creating Confidence, Trust & Lifetime Experiences"
          descriptions={[
            "We believe that a great smile is more than just straight teeth — it is the foundation of self-assurance, social confidence, and oral health.",
            "By combining state-of-the-art orthodontic science with an atmosphere of genuine hospitality, we ensure every visit feels supportive, clear, and stress-free.",
          ]}
          primaryButton={{ text: "Your First Visit", href: "/first-visit" }}
        />
      </div>

      <div id="clinical-standards" data-section="clinical-standards">
        <FeaturesMediaCards
          textAnimation="slide-up"
          tag="Clinical Excellence"
          title="State-of-the-Art Care Delivered with Heart"
          description="We stay at the forefront of modern orthodontic technology to make treatment faster, more comfortable, and remarkably precise."
          items={[
            {
              title: "Digital Diagnostics & 3D Scanning",
              description: "Utilizing low-dose digital imaging and intraoral 3D scanners, we map out tooth movement with pin-point digital accuracy before treatment even begins.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif?_wi=1",
            },
            {
              title: "Gentle & Biocompatible Materials",
              description: "From ultra-flexible memory wires to crystal-clear biocompatible aligners, we prioritize gentle forces that minimize discomfort.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif?_wi=1",
            },
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamProfileCards
          textAnimation="slide-up"
          tag="Our Care Team"
          title="Dedicated Specialists Focused on Your Family"
          description="Our clinical team brings years of specialized orthodontic education, clinical expertise, and a passion for patient comfort."
          items={[
            {
              title: "[Lead Orthodontist, DDS, MS]",
              description: "Board-Certified Orthodontic Specialist dedicated to precision 3D treatment and family-centered care.",
              avatarSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-1.webp",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-doctor-1.webp",
              buttonText: "Meet Specialist",
              buttonHref: "/contact",
            },
            {
              title: "[Clinical Care Director, RDA]",
              description: "Orthodontic Clinical Supervisor ensuring comfortable, efficient visits for every patient.",
              avatarSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-1.webp",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-1.webp",
              buttonText: "Care Team",
              buttonHref: "/contact",
            },
            {
              title: "[Patient Experience Coordinator]",
              description: "Treatment Advisor assisting with insurance, 0% financing, and convenient multi-family scheduling.",
              avatarSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-2.webp",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/team/team-assistant-2.webp",
              buttonText: "Scheduling",
              buttonHref: "/contact",
            },
          ]}
        />
      </div>

      <div id="values" data-section="values">
        <MetricsIconCards
          textAnimation="slide-up"
          tag="Why Choose Stillwater"
          title="Our Core Commitments to Every Patient"
          description="What sets Stillwater Orthodontics apart in quality, comfort, and patient satisfaction."
          metrics={[
            {
              icon: "Users",
              title: "Multi-Generational Care",
              value: "Family",
            },
            {
              icon: "Sparkles",
              title: "100% Digital 3D Scans",
              value: "Zero Goo",
            },
            {
              icon: "ShieldCheck",
              title: "Transparent Financing",
              value: "0% Interest",
            },
          ]}
        />
      </div>

      <div id="about-cta" data-section="about-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Join Our Family"
          text="Experience the Stillwater Difference"
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
        />
      </div>
    </StyleProvider>
  );
}
