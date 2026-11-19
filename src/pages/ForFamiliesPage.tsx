import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesMediaCards from "@/components/sections/features/FeaturesMediaCards";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import MetricsIconCards from "@/components/sections/metrics/MetricsIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function ForFamiliesPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="families-hero" data-section="families-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="For Families"
          title="Convenient, Welcoming Orthodontic Care for Your Entire Family"
          description="We understand how busy family life can be. Stillwater Orthodontics combines expert pediatric and family care with hassle-free scheduling, transparent guidance, and a warm atmosphere."
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Your First Visit", href: "/first-visit" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/about/about2.avif"
        />
      </div>

      <div id="family-perks" data-section="family-perks">
        <FeaturesMediaCards
          textAnimation="slide-up"
          tag="Family-Centered Excellence"
          title="Designed with Parents and Kids in Mind"
          description="From your very first phone call to your child's final retainer check, we make every step seamless and supportive."
          items={[
            {
              title: "Early Evaluation Around Age 7",
              description: "The American Association of Orthodontists recommends a first evaluation at age 7. Early checks help spot subtle jaw growth issues before they become complex.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/about/about1.avif",
            },
            {
              title: "Synchronized Family Appointments",
              description: "Save trips and simplify your calendar by booking back-to-back or simultaneous appointments for siblings or parent-child treatment.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif",
            },
          ]}
        />
      </div>

      <div id="why-families-love-us" data-section="why-families-love-us">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Parent Peace of Mind"
          title="What Makes Stillwater Family-Friendly"
          description="We eliminate stress and uncertainty so you can focus on watching your child grow and gain confidence."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "Goo-Free Digital Impressions",
              description: "Kids love our high-speed 3D scanner. No choking on impression putty, just a fast and fun digital camera scan.",
              centerIcon: "Smile",
              marqueeTexts: ["Kid-Friendly Scans", "Zero Gooey Putty", "Fast 3D Camera", "Zero Gagging"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Transparent & Flexible Financing",
              description: "No unexpected surprise fees. We detail all records, appliances, progress visits, and initial retainers in one clear quote.",
              infoCards: [
                { icon: "HeartHandshake", label: "Financing", value: "0% Interest In-House" },
                { icon: "ShieldCheck", label: "Insurance", value: "Claims Filed For You" },
                { icon: "CheckCircle", label: "Pricing", value: "All-Inclusive Quote" },
              ],
            },
          ]}
        />
      </div>

      <div id="family-metrics" data-section="family-metrics">
        <MetricsIconCards
          textAnimation="slide-up"
          tag="Family Milestones"
          title="Partnering with Families Every Step of the Way"
          description="Our commitment to pediatric and family orthodontic care."
          metrics={[
            {
              icon: "Calendar",
              title: "Recommended First Check",
              value: "Age 7",
            },
            {
              icon: "HeartHandshake",
              title: "In-House Flexible Plans",
              value: "0% Int.",
            },
            {
              icon: "Users",
              title: "Combined Family Slots",
              value: "Multi",
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
