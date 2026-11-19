import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { useButtonClick } from "@/hooks/useButtonClick";

interface NavbarInlineProps {
  logo: string;
  logoImage?: string;
  navItems: { name: string; href: string }[];
  ctaButton: { text: string; href: string };
}

interface NavItemProps {
  name: string;
  href: string;
  onClick?: () => void;
}

const NavItem = ({ name, href, onClick }: NavItemProps) => {
  const handleClick = useButtonClick(href, onClick);
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative py-1 text-sm xl:text-base font-medium transition-colors duration-200 inline-flex items-center whitespace-nowrap ${
        isActive
          ? "text-primary-cta after:w-full"
          : "text-foreground hover:text-primary-cta after:w-0"
      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-cta after:transition-all after:duration-300 hover:after:w-full`}
    >
      <span>{name}</span>
    </a>
  );
};

const NavbarInline = ({ logo, logoImage, navItems, ctaButton }: NavbarInlineProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleLogoClick = useButtonClick("/");

  return (
    <nav data-section="navbar" className="fixed z-[100] top-4 left-1/2 -translate-x-1/2 w-content-width">
      <div className="flex items-center justify-between p-2.5 xl:p-3 rounded-2xl backdrop-blur-md card border border-border/40 shadow-lg">
        {/* Brand Logo Anchor */}
        <a
          href="/"
          onClick={handleLogoClick}
          className="pl-1 sm:pl-2 text-sm xl:text-base font-bold tracking-tight text-foreground flex items-center gap-3 shrink-0 group relative"
        >
          {logoImage ? (
            <div className="relative flex items-center justify-center shrink-0">
              <img
                src={logoImage}
                alt={logo}
                className="h-16 w-16 sm:h-24 sm:w-24 md:h-32 md:w-32 xl:h-[150px] xl:w-[150px] -my-4 sm:-my-7 md:-my-10 xl:-my-13 object-contain shrink-0 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
              />
            </div>
          ) : (
            <span className="w-2.5 h-2.5 rounded-full bg-primary-cta inline-block" />
          )}
          <span className="font-extrabold tracking-wider text-xs sm:text-sm md:text-base xl:text-lg">{logo}</span>
        </a>

        {/* Navigation Menu & Actions on the Right */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 shrink-0">
          <nav className="flex items-center gap-5 xl:gap-7">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                href={item.href}
              />
            ))}
          </nav>
          <div className="hidden sm:block pl-2 border-l border-border/30">
            <Button text={ctaButton.text} href={ctaButton.href} variant="primary" animate={false} />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-primary-cta rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 p-5 rounded-2xl card backdrop-blur-xl border border-border/40 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                name={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>
          <div className="pt-2 border-t border-border/30 sm:hidden">
            <Button
              text={ctaButton.text}
              href={ctaButton.href}
              variant="primary"
              animate={false}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarInline;
