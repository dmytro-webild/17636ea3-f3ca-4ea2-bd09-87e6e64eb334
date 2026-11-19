import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeaturesGridSplit from "@/components/sections/features/FeaturesGridSplit";
import FeaturesBento from "@/components/sections/features/FeaturesBento";
import FaqTwoColumn from "@/components/sections/faq/FaqTwoColumn";
import ContactCta from "@/components/sections/contact/ContactCta";

export default function ForTeensPage() {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="horizonGlow" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <div id="teens-hero" data-section="teens-hero">
        <HeroSplit
          textAnimation="slide-up"
          tag="For Teens & Young Adults"
          title="Smile With Confidence at Every Stage of Your Journey"
          description="High school, college, sports, and early careers are full of big moments. We offer discreet, modern orthodontic options that let you smile cheaply and boldly while achieving your ideal alignment."
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
          imageSrc="https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif"
        />
      </div>

      <div id="teen-options" data-section="teen-options">
        <FeaturesGridSplit
          textAnimation="slide-up"
          tag="Tailored Options"
          title="Orthodontic Treatment Made for Your Lifestyle"
          description="Choose the treatment style that fits your personal look, daily routine, and activity level."
          topItems={[
            {
              title: "Virtually Invisible Clear Aligners",
              description: "Pop them out to eat, brush, or take photos for special occasions. Smooth, transparent aligners designed to fit into busy school and athletic schedules.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service3.avif",
            },
            {
              title: "Clear Ceramic Braces",
              description: "High-translucency ceramic brackets that blend in with your natural teeth, offering a low-profile look with high precision.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/dentist/services/service1.avif",
            },
          ]}
          bottomItem={{
            title: "Post-Graduate & Young Adult Care",
            description: "Discreet, high-efficiency options tailored for young professionals preparing for interviews, careers, and milestones.",
            imageSrc: "https://storage.googleapis.com/webild/default/templates/med-spa/services/service1.webp",
            primaryButton: { text: "Book a Consultation Now", href: "/contact" },
          }}
        />
      </div>

      <div id="teen-lifestyle" data-section="teen-lifestyle">
        <FeaturesBento
          textAnimation="slide-up"
          tag="Life Uninterrupted"
          title="Keep Doing Everything You Love"
          description="Our modern approach means your treatment adapts to your life, not the other way around."
          features={[
            {
              bentoComponent: "icon-text-marquee",
              title: "No Food Restrictions with Aligners",
              description: "Enjoy popcorn, apples, pizza, and your favorite treats simply by removing your aligner trays during mealtime.",
              centerIcon: "Sparkles",
              marqueeTexts: ["No Food Limits", "Removable Aligners", "Easy Brushing", "Photo Ready"],
            },
            {
              bentoComponent: "info-card-marquee",
              title: "Sports & Performing Arts Protection",
              description: "We provide custom sports guards and comfortable aligner designs for brass, woodwinds, and athletic activities.",
              infoCards: [
                { icon: "ShieldCheck", label: "Athletics", value: "Custom Sports Guards" },
                { icon: "Sparkles", label: "Music & Drama", value: "Smooth Comfort" },
                { icon: "Clock", label: "Appointments", value: "Quick Check-ins" },
              ],
            },
          ]}
        />
      </div>

      <div id="teen-faq" data-section="teen-faq">
        <FaqTwoColumn
          textAnimation="slide-up"
          tag="Teen FAQs"
          title="Common Questions from Teens & Young Adults"
          description="Everything you want to know about living with aligners or braces."
          items={[
            {
              question: "Will people notice if I am wearing clear aligners?",
              answer: "Clear aligners are made from ultra-thin, medical-grade transparent polymer engineered to fit tightly over your teeth. Most people will not notice unless you point them out!",
            },
            {
              question: "How many hours a day do I need to wear aligners?",
              answer: "For best results, aligners should be worn 20 to 22 hours per day, taking them out only to eat, drink non-water beverages, and brush.",
            },
            {
              question: "What happens if I lose an aligner or break a bracket?",
              answer: "Don't panic! Simply contact our office right away. We keep digital backups of your scan and can quickly replace an aligner or smooth a bracket.",
            },
            {
              question: "Is adult or young adult treatment as effective as teen treatment?",
              answer: "Absolutely! Teeth can be guided into proper alignment safely at any age. Over 30% of our active orthodontic patients are young adults and adults.",
            },
          ]}
        />
      </div>

      <div id="teens-cta" data-section="teens-cta">
        <ContactCta
          textAnimation="slide-up"
          tag="Start Your Smile Transformation"
          text="Ready to Build a Smile You Love?"
          primaryButton={{ text: "Book a Consultation Now", href: "/contact" }}
          secondaryButton={{ text: "Explore Treatment Options", href: "/treatments" }}
        />
      </div>
    </StyleProvider>
  );
}
