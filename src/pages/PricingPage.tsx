import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import PricingHighlightedCards from "@/components/sections/pricing/PricingHighlightedCards";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function PricingPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="pricing-hero" data-section="pricing-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="Transparent Pricing"
          title="Affordable, All-Inclusive Orthodontic Pricing"
          description="Every smile is unique, and pricing varies depending on case complexity and length of care. Your initial consultation is always 100% free, and we provide transparent, all-inclusive quotes with zero hidden fees."
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/services/service2.avif?_wi=1"
        />
      </div>

      <div id="pricing-plans" data-section="pricing-plans">
        <PricingHighlightedCards
          textAnimation="slide-up"
          tag="Treatment Options & Fees"
          title="Clear & Transparent Pricing Plans"
          description="Select your preferred treatment option below. We offer 0% interest monthly payment options and direct insurance processing to fit your family budget."
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          plans={[
            {
              tag: "Initial Consultation",
              price: "$0",
              description: "100% Complimentary Visit",
              features: [
                "Full orthodontic exam with specialist",
                "High-precision 3D intraoral digital scan",
                "Custom treatment plan & timeline",
                "Complete insurance & financing breakdown",
              ],
              primaryButton: { text: "Book Free Consultation", href: "/contact" },
            },
            {
              tag: "Early Orthodontic intervention",
              price: "Starting at $1,500",
              description: "or ~$99/month with 0% interest financing",
              features: [
                "Expanders",
                "Habit-Breaking Appliances",
                "Space Maintenance",
                "Functional Appliances",
              ],
              primaryButton: { text: "Choose Metal Braces", href: "/contact" },
            },
            {
              tag: "Orthodontic Re-Treatment",
              price: "Starting at $4,500",
              description: "or ~$129/month with 0% interest financing",
              features: [
                "Previous Orthodontic Treatment Requiring Further Correction",
                "Relapse Correction",
                "Refinement of the bite",
                "Closing minor spaces",
              ],
              primaryButton: { text: "Choose Ceramic Braces", href: "/contact" },
            },
            {
              tag: "Braces or Clear Aligners",
              price: "Starting at $6,500",
              highlight: "Most Popular Aesthetic Option",
              description: "or ~$139/month with 0% interest financing",
              features: [
                "Comprehensive Orthodontic treatment",
                "Correction of crowding and spacing",
                "Correction of overbite",
                "Correction of Jaw-Asymmetry",
              ],
              primaryButton: { text: "Choose Clear Aligners", href: "/contact" },
            },
            {
              tag: "Retainers & Smile Care",
              price: "Starting at $350",
              description: "Post-treatment retention & care",
              features: [
                "Custom clear acrylic retention appliances",
                "Nighttime wear schedule & guidance",
                "Digital scan storage for easy replacements",
                "1-year warranty & fit guarantee",
              ],
              primaryButton: { text: "Inquire About Retainers", href: "/contact" },
            },
          ]}
        />
      </div>

      <div id="financial-peace" data-section="financial-peace">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Financial Peace of Mind"
          title="Flexible Payment Options Made for Families"
          description="We believe financial considerations should never stand between your family and a radiant, healthy smile."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "0% Interest In-House Monthly Financing",
              description: "Customize your down payment and monthly installment plans with zero hidden fees, zero credit checks, and zero interest charges.",
              centerIcon: "HeartHandshake",
              marqueeTexts: ["0% Interest Financing", "Custom Down Payments", "Low Monthly Payments", "Zero Hidden Fees"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Insurance & Pre-Tax Savings",
              description: "We work directly with major insurance providers and support HSA/FSA accounts to minimize out-of-pocket expenses.",
              infoCards: [
                { icon: "ShieldCheck", label: "Insurance", value: "Direct Claim Filing" },
                { icon: "CreditCard", label: "Pre-Tax", value: "HSA / FSA Eligible" },
                { icon: "Sparkles", label: "Pricing", value: "All-Inclusive Quotes" },
              ],
            },
          ]}
        />
      </div>

      <div id="pricing-faq" data-section="pricing-faq">
        <FaqTwoColumn
          textAnimation="slide-up"
          tag="Pricing FAQ"
          title="Frequently Asked Questions About Treatment Costs"
          description="Have questions about costs, insurance, or payments? Here are clear answers to our patients' top questions."
          items={[
            {
              question: "Is the initial consultation really 100% free?",
              answer: "Yes! Your initial 60-minute visit includes a full orthodontic evaluation, 3D intraoral digital scan, and personalized treatment review with zero cost and zero obligation.",
            },
            {
              question: "What is included in the quoted treatment price?",
              answer: "Our quotes are 100% all-inclusive. They cover all diagnostic scans, brackets or aligners, routine adjustment visits, emergency support, and your initial set of retainers.",
            },
            {
              question: "Does dental insurance cover orthodontic care?",
              answer: "Many dental plans include orthodontic benefits that can pay between $1,000 and $3,000 toward treatment. Our team will verify your benefits and handle all claims directly.",
            },
            {
              question: "What monthly payment options are available?",
              answer: "We offer flexible in-house monthly payment plans with 0% interest. You can choose a down payment and monthly amount that comfortably fits your household budget.",
            },
          ]}
        />
      </div>

      <div id="pricing-cta" data-section="pricing-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Get Your Custom Quote"
          text="Ready to Discover What Your New Smile Will Cost?"
          primaryButton={{ text: "Book a FREE Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
        />
      </div>
    </StyleProvider>
  );
}
