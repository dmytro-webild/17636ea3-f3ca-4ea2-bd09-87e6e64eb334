import { useButtonClick } from "@/hooks/useButtonClick";

type FooterColumn = {
  title: string;
  items: { label: string; href?: string; onClick?: () => void }[];
};

type FooterLink = {
  label: string;
  href?: string;
  onClick?: () => void;
};

const FooterLinkItem = ({ label, href, onClick }: FooterLink) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <button
      onClick={handleClick}
      className="text-base text-white/90 hover:text-[#32D5E9] transition-colors cursor-pointer text-left"
    >
      {label}
    </button>
  );
};

const FooterBottomLink = ({ label, href, onClick }: FooterLink) => {
  const handleClick = useButtonClick(href, onClick);

  return (
    <button
      onClick={handleClick}
      className="text-sm text-white/60 hover:text-[#32D5E9] transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
};

const FooterSimple = ({
  brand,
  logoImage,
  columns,
  copyright,
  links,
}: {
  brand?: string;
  logoImage?: string;
  columns: FooterColumn[];
  copyright: string;
  links: FooterLink[];
}) => {
  return (
    <footer data-section="footer" aria-label="Site footer" className="w-full py-15 mt-20 bg-[#0E2942] text-white">
      <div className="w-content-width mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start mb-10">
          {logoImage ? (
            <a href="/" className="inline-block shrink-0">
              <img
                src={logoImage}
                alt={brand || "Stillwater Orthodontics"}
                className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              />
            </a>
          ) : (
            <h2 className="text-4xl font-semibold text-white">{brand}</h2>
          )}

          <div className="w-full md:w-fit flex flex-wrap gap-y-10 md:gap-12">
            {columns.map((column) => (
              <div key={column.title} className="w-1/2 md:w-auto flex flex-col items-start gap-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-[#32D5E9] truncate">{column.title}</h3>
                {column.items.map((item) => (
                  <FooterLinkItem key={item.label} label={item.label} href={item.href} onClick={item.onClick} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/15">
          <span className="text-sm text-white/60">{copyright}</span>
          <div className="flex items-center gap-3">
            {links.map((link) => (
              <FooterBottomLink key={link.label} label={link.label} href={link.href} onClick={link.onClick} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSimple;
