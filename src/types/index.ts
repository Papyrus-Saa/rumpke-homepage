import { OperationType } from '@/store/ui/ui-store';

export type PropertyStatus = 'PUBLISHED' | 'RESERVED' | 'SOLD' | 'RENTED' | 'DRAFT' | 'HIDDEN';

export type PropertyType = 'HAUS' | 'WOHNUNG' | 'GEWERBE' | 'GRUNDSTUECK' | 'SONSTIGE';

export interface PropertyDetails {
  id: string;
  slug: string;
  title: string;
  status: PropertyStatus;
  operation: string;
  main_image?: string;
  price_amount?: number;
  available_from?: string;
  deposit?: number;
  furnished?: boolean;
  type: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  image: string;
  price?: string;
  operationType: OperationType;
  availableFrom?: string;
  deposit?: number;
  furnished?: boolean;
  type: string;
}
