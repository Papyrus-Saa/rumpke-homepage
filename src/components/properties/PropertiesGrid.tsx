import PropertyCard from './PropertyCard';

interface Property {
  id: string;
  slug: string;
  title: string;
  type: string;
  price: string;
  location: string;
  imageUrl: string;
  area?: string;
  rooms?: number;
  operationType?: 'kauf' | 'miete';
}

interface PropertiesGridProps {
  properties: Property[];
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  if (properties.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-card-text-l dark:text-card-text-d text-lg">
          Keine Immobilien gefunden.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          id={property.id}
          slug={property.slug}
          title={property.title}
          type={property.type}
          price={property.price}
          location={property.location}
          imageUrl={property.imageUrl}
          area={property.area}
          rooms={property.rooms}
          operationType={property.operationType}
        />
      ))}
    </div>
  );
}
