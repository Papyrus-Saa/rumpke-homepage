import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import type { FeaturedProperty } from "@/components/features/triple-slider/TripleSlider.types";
import TripleSlider from "@/components/features/triple-slider/TripleSlider";
import { MOCK_FEATURED_PROPERTIES } from "@/data/mock-properties";

const DEFAULT_SITE_URL = "http://localhost:3000";
const siteName = "Rumpke Immobilien";
const siteLocale = "de_DE";

type RouteParams = {
  slug: string;
};

interface PageProps {
  params: Promise<RouteParams>;
}

type Property = FeaturedProperty;

function resolveMetadataBase(): URL {
  const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl = configuredSiteUrl && configuredSiteUrl.length > 0
    ? configuredSiteUrl
    : DEFAULT_SITE_URL;

  return new URL(siteUrl);
}

function getPropertyBySlug(slug: string): Property | undefined {
  return MOCK_FEATURED_PROPERTIES.find(property => property.slug === slug);
}

function buildPropertyMetadataTitle(property: Property): string {
  return `${property.title} in ${property.location}`;
}

function buildPropertyCanonicalPath(property: Property): string {
  return `/object/${property.slug}`;
}

function buildPropertyMetadataDescription(property: Property): string {
  const propertyDetails = [
    property.type,
    property.location,
    property.area,
    property.rooms ? `${property.rooms} Zimmer` : undefined,
  ].filter((detail): detail is string => Boolean(detail)).join(" · ");

  const transactionLabel = property.operationType === "miete" ? "Zur Miete" : "Zum Kauf";

  return `${property.title}. ${propertyDetails}. ${transactionLabel} für ${property.price}. Jetzt bei ${siteName} anfragen.`;
}

async function getRouteProperty(paramsPromise: Promise<RouteParams>): Promise<Property> {
  const { slug } = await paramsPromise;

  if (!slug || slug.trim() === "") {
    notFound();
  }

  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return property;
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const property = await getRouteProperty(params);
  const title = buildPropertyMetadataTitle(property);
  const description = buildPropertyMetadataDescription(property);
  const canonicalPath = buildPropertyCanonicalPath(property);
  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    metadataBase: resolveMetadataBase(),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalPath,
      locale: siteLocale,
      siteName,
      type: "website",
      images: [
        {
          url: property.imageUrl,
          alt: title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [property.imageUrl],
    },
  };
}

export default async function PropertyObjectPage({ params }: PageProps) {
  const property = await getRouteProperty(params);

  const reorderedProperties = [
    property,
    ...MOCK_FEATURED_PROPERTIES.filter(candidateProperty => candidateProperty.slug !== property.slug)
  ];

  return (
    <main className="w-full">
      <TripleSlider properties={reorderedProperties} />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-text-l dark:text-text-d">
          {property.title}
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card-l dark:bg-card-d p-6 rounded border border-border-l dark:border-border-d">
              <h2 className="text-xl font-semibold mb-4 text-text-l dark:text-text-d">
                Beschreibung
              </h2>
              <p className="text-card-text-l dark:text-card-text-d leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card-l dark:bg-card-d p-6 rounded border border-border-l dark:border-border-d">
              <h3 className="text-xl font-semibold mb-4 text-text-l dark:text-text-d">
                Details
              </h3>
              <dl className="space-y-3 text-card-text-l dark:text-card-text-d">
                <div className="flex justify-between">
                  <dt className="font-medium">Preis:</dt>
                  <dd className="text-primary font-bold">{property.price}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Typ:</dt>
                  <dd>{property.type}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Standort:</dt>
                  <dd>{property.location}</dd>
                </div>
                {property.area && (
                  <div className="flex justify-between">
                    <dt className="font-medium">Fläche:</dt>
                    <dd>{property.area}</dd>
                  </div>
                )}
                {property.rooms && (
                  <div className="flex justify-between">
                    <dt className="font-medium">Zimmer:</dt>
                    <dd>{property.rooms}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
