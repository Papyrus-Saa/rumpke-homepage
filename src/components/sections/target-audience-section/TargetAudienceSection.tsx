import Image from 'next/image';
import { IoHomeOutline, IoPersonAddOutline, IoKeyOutline } from 'react-icons/io5';
import Title from '@/components/ui/title/Title';
import AudienceCard from './AudienceCard';

const cards = [
  {
    icon: <IoHomeOutline size={24} className="" />,
    title: 'Eigentümer',
    text: 'Wir unterstützen Eigentümer beim Verkauf oder der Vermietung ihrer Immobilie.',
  },
  {
    icon: <IoPersonAddOutline size={24} className="" />,
    title: 'Käufer',
    text: 'Finden Sie mit uns Ihr neues Zuhause oder Ihre nächste Investition.',
  },
  {
    icon: <IoKeyOutline size={24} className="" />,
    title: 'Mieter',
    text: 'Wir helfen Mietern, die passende Immobilie zu finden.',
  },
];

const TargetAudienceSection = () => {
  return (
    <section className="w-full md:py-12 mb-12 lg:rounded  p-6 ">
      <div className="grid gap-2 lg:grid-cols-2 items-stretch ">
        <div className="order-1 lg:order-2 flex flex-col items-center justify-center w-full mb-8 md:mb-0 ">
          <div className="w-full max-w-md flex flex-col items-center justify-center h-full">
            <Image
              src="/imgs/whyTrustUsPic-2.jpg"
              alt="Für wen wir da sind"
              width={500}
              height={500}
              className="md:rounded object-cover max-w-full shadow-lg"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
        <div className="order-2 lg:order-1 flex flex-col  justify-center w-full max-w-md mx-auto h-full rounded">
          <Title variant="h2" size="lg" className="mb-2">Für wen wir da sind</Title>
          <p className="mb-6 text-base sm:text-lg px-2 sm:px-0 text-card-text-l dark:text-card-text-d">
            Wir bieten individuelle Unterstützung für verschiedene Zielgruppen – damit jeder die passende Lösung findet.
          </p>
          <div className="flex flex-col gap-4 w-full">
            {cards.map((card) => (
              <AudienceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
