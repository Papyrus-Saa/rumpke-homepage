import PersonalServiceCard from "@/components/personal-service-card/PersonalServiceCard"
import ServicesSection from "@/components/services-section/ServicesSection"
import TargetAudienceSection from "@/components/target-audience-section/TargetAudienceSection"
import Sidebar from "@/components/ui/sidebar/Sidebar"
import SidebarDesktop from "@/components/ui/sidebar/SidebarDesktop"
import WhyChooseRumpke from "@/components/why-choose-rumpke/WhyChooseRumpke"

const page = () => {
  return (
    <div>
      <SidebarDesktop />
      <Sidebar/>
      <TargetAudienceSection />
      <WhyChooseRumpke />
      <ServicesSection />
      <PersonalServiceCard />
    </div>
  )
}

export default page
