'use client';


import SidebarItem from "./SidebarItem";
import { useState } from "react";
import { IoHomeOutline, IoBusinessOutline, IoMapOutline, IoChatbubbleEllipsesOutline, IoBriefcaseOutline, IoMailOutline, IoAlbumsOutline, IoChevronForwardOutline } from "react-icons/io5"
import { ThemeSwitch } from "@/context/ThemeSwitsh";

const SidebarDesktop = () => {


  const [openDienstleistungen, setOpenDienstleistungen] = useState(false);

  return (
    <div className="hidden md:block h-screen border-r dark:border-primary-dark/30 border-primary/30">
      <div className="flex">
        <SidebarItem href="/">Start</SidebarItem>
        <SidebarItem href="/auf-karte-erkunden">Auf Karte erkunden</SidebarItem>
        <SidebarItem href="/kategorie/haus">Haus</SidebarItem>
        <SidebarItem href="/kategorie/wohnung">Wohnung</SidebarItem>
        <SidebarItem href="/kategorie/gewerbe">Gewerbe</SidebarItem>
        <SidebarItem href="/kategorie/grundstueck">Grundstück</SidebarItem>
        <SidebarItem href="/kategorie/sonstige">Sonstige</SidebarItem>
        <button
          type="button"
          className="flex items-center mt-4 pl-1 py-1 w-full hover:bg-primary/50 hover:text-black dark:hover:text-white dark:hover:bg-primary-dark/50 rounded transition-all cursor-pointer focus:outline-none"
          onClick={() => setOpenDienstleistungen((v) => !v)}
        >
          <IoBriefcaseOutline size={20} className="mr-2" />
          <span>Dienstleistungen</span>
          <IoChevronForwardOutline size={16} className={`ml-auto transition-transform ${openDienstleistungen ? 'rotate-90' : ''}`} />
        </button>
        {openDienstleistungen && (
          <div className="ml-8 mt-1 space-y-1">
            <SidebarItem href="/dienstleistungen/verkauf-vermietung" icon={<IoChevronForwardOutline size={14} className="mr-2 text-primary/80" />}>
              Verkauf & Vermietung
            </SidebarItem>
            <SidebarItem href="/dienstleistungen/immobilienbewertung" icon={<IoChevronForwardOutline size={14} className="mr-2 text-primary/80" />}>
              Immobilienbewertung
            </SidebarItem>
            <SidebarItem href="/dienstleistungen/immobilien-kauf" icon={<IoChevronForwardOutline size={14} className="mr-2 text-primary/80" />}>
              Immobilienkauf
            </SidebarItem>
          </div>
        )}
        <SidebarItem href="/ueber-uns" icon={<IoChatbubbleEllipsesOutline size={20} />} >Über uns</SidebarItem>
        <SidebarItem href="/kontakt" icon={<IoMailOutline size={20} />} >Kontakt</SidebarItem>
        <div className="flex py-1 mt-3 justify-start items-center hover:bg-primary/50 hover:text-black w-full dark:hover:text-white dark:hover:bg-primary-dark/50 rounded">
          <ThemeSwitch />
        </div>
      </div>
    </div>

  )
}

export default SidebarDesktop;
