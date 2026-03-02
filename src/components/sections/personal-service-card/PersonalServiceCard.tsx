
import Image from "next/image";
import Link from "next/link";
import Title from '@/components/ui/title/Title';

const PersonalServiceCard = () => {

  return (
    <section className="w-full md:py-12 mb-12 lg:rounded p-6 bg-secondary dark:bg-secondary-dark shadow-secondary">
      <div className="max-w-md mx-auto grid lg:grid-cols-2 lg:max-w-full gap-6">
        <div className="w-full flex items-center justify-center mb-6">
          <Image
            src="/imgs/personal-service-pic.jpeg"
            alt="Ann-Christin Rumpke Portrait"
            width={320}
            height={320}
            className="object-cover w-full xl:max-w-md border border-border-l dark:border-border-d"
            style={{ height: "auto" }}
            priority
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div>
            <div className="space-y-4 ">
              <Title variant="h2" size="md" className="mb-2">Persönlicher Service</Title>
              <p className="text-base mb-4 dark:text-card-text-d text-card-text-l">Ich nehme mir Zeit für Sie und Ihre individuellen Wünsche. Jeder Kunde wird von einem festen Ansprechpartner betreut, der ihn während des gesamten Prozesses begleitet.</p>
            </div>
            <div className="space-y-4">
              <Title variant="h2" size="md" className="mb-2">Lokale Expertise</Title>
              <p className="text-base mb-4 dark:text-card-text-d text-card-text-l">Als erfahrene Immobilienmaklerin kenne ich den regionalen Markt und seine Besonderheiten. Nutzen Sie unser Netzwerk und unser Know-how zu Ihrem Vorteil.</p>
            </div>
            <div className="space-y-4">
              <Title variant="h2" size="md" className="mb-2">Transparenz und Vertrauen</Title>
              <p className="text-base mb-4 dark:text-card-text-d text-card-text-l">Bei uns gibt es keine versteckten Kosten. Wir legen Wert auf eine offene Kommunikation und faire Konditionen.</p>
            </div>
          </div>
        </div>
      </div>
          <div className="w-full">
            <Link href="/ueber-uns" className="w-full inline-block mt-4 px-6 py-2 bg-primary dark:bg-primary-dark text-white rounded font-semibold shadow hover:bg-primary-dark dark:hover:bg-primary text-center">Über mich</Link>
          </div>
    </section>
  );
};

export default PersonalServiceCard;
