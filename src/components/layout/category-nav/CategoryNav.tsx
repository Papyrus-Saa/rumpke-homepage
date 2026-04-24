

import ContactTooltip from "@/components/features/contact-buttom/ContactTooltip";
import NavItem from "@/components/ui/nav-item/NavItem";

const CategoryNav = () => {
  return (
    <nav
      aria-label="Property categories"
      className="sticky top-(--topbar-height) z-30 hidden bg-secondary py-2 text-white dark:bg-secondary-dark md:flex"
    >
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center px-4">
        <div aria-hidden="true" />
        <div className="flex max-w-xl items-center justify-center gap-1 lg:gap-2">
          <NavItem href="/auf-karte-erkunden">Auf Karte erkunden</NavItem>
          <NavItem href="/kategorie/haus">Haus</NavItem>
          <NavItem href="/kategorie/wohnung">Wohnung</NavItem>
          <NavItem href="/kategorie/gewerbeimmobilien">Gewerbeimmobilien</NavItem>
          <NavItem href="/kategorie/grundstueck">Grundstück</NavItem>
          <NavItem href="/kategorie/sonstige">Sonstige</NavItem>
        </div>
        <div className="mr-4 justify-self-end">
          <ContactTooltip />
        </div>
      </div>
    </nav>
  )
}

export default CategoryNav;
