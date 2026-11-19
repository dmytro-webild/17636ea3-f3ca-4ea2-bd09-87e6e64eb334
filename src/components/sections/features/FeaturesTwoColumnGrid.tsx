import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { LucideIcon } from "lucide-react";
import { resolveIcon } from "@/utils/resolve-icon";

export type FeatureGridItem = {
  icon: string | LucideIcon;
  title: string;
  description: string;
};

interface FeaturesTwoColumnGridProps {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  features: FeatureGridItem[];
  textAnimation?: "slide-up" | "fade-blur" | "fade";
}

const FeaturesTwoColumnGrid = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
  textAnimation = "slide-up",
}: FeaturesTwoColumnGridProps) => {
  return (
    <section aria-label="Features grid section" className="flex flex-col gap-8 md:gap-10 py-16 md:py-20">
      <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
          <p>{tag}</p>
        </div>

        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-4xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" />}
            {secondaryButton && (
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
            )}
          </div>
        )}
      </div>

      <ScrollReveal variant="slide-up">
        <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {features.map((feature) => {
            const FeatureIcon = resolveIcon(feature.icon);
            return (
              <div
                key={feature.title}
                className="flex flex-row items-start gap-4 p-5 md:p-6 card rounded"
              >
                <div className="flex items-center justify-center shrink-0 size-11 md:size-12 primary-button rounded shadow text-primary-cta-text">
                  <FeatureIcon className="size-5 md:size-6" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-2xl font-semibold leading-snug text-foreground">{feature.title}</h3>
                  <p className="text-base text-foreground/80 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </section>
  );
};

export default FeaturesTwoColumnGrid;
