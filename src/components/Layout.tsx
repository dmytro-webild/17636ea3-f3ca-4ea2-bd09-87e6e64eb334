import { Outlet } from 'react-router-dom';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarInline from "@/components/ui/NavbarInline";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarInline
        logo="Stillwater Orthodontics"
        navItems={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Treatments", href: "/treatments" },
          { name: "For Families", href: "/for-families" },
          { name: "Teens & Adults", href: "/for-teens-young-adults" },
          { name: "First Visit", href: "/first-visit" },
          { name: "Contact", href: "/contact" },
        ]}
        ctaButton={{ text: "Request a Consultation", href: "/contact" }}
      />
      <main className="flex-grow pt-24 md:pt-28">
        <Outlet />
      </main>
      <FooterSimple
        brand="Stillwater Orthodontics"
        columns={[
          {
            title: "Treatments",
            items: [
              { label: "Clear Aligners", href: "/treatments" },
              { label: "Ceramic & Metal Braces", href: "/treatments" },
              { label: "Pediatric Orthodontics", href: "/for-families" },
              { label: "Teen & Adult Solutions", href: "/for-teens-young-adults" },
            ],
          },
          {
            title: "Patient Journey",
            items: [
              { label: "Your First Visit", href: "/first-visit" },
              { label: "For Families", href: "/for-families" },
              { label: "For Teens & Young Adults", href: "/for-teens-young-adults" },
              { label: "Our Philosophy", href: "/about" },
            ],
          },
          {
            title: "Contact & Practice",
            items: [
              { label: "About Stillwater", href: "/about" },
              { label: "Get in Touch", href: "/contact" },
              { label: "[Clinic Address, Stillwater]", href: "/contact" },
              { label: "[Phone Number]", href: "/contact" },
            ],
          },
        ]}
        copyright="© 2026 Stillwater Orthodontics. Exceptional Care for Families."
        links={[{ label: "Privacy Policy", href: "#" }, { label: "Patient Terms", href: "#" }]}
      />
    </StyleProvider>
  );
}
