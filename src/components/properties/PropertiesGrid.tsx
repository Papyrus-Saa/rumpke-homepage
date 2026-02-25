
"use client";

import Link from 'next/link';
import PropertyCard from './PropertyCard';
import type { OperationType } from '@/types';

interface Property {
  id: string;
  slug: string;
  title: string;
  image: string;
  price?: string;
  operationType: OperationType;
}


interface PropertiesGridProps {
  properties: Property[];
  onSelectProperty?: (property: Property) => void;
  category?: string;
  children?: React.ReactNode;
}


const PropertiesGrid: React.FC<PropertiesGridProps> = ({ properties, onSelectProperty, children }) => {


  return (
    <>
      <div className="sm:p-2">
        {properties.map((property) => (
          <Link
            key={property.id}
            href={`/object/${property.slug}`}
            className="block"
          >
            <PropertyCard
              property={property}
            />
          </Link>
        ))}
        {children}
      </div>

    </>
  );
};

export default PropertiesGrid;
