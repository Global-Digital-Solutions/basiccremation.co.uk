import type { Metadata } from "next";
import { LocationPage } from "@/components/location-page";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
import { coventryLocation } from "@/lib/locations/coventry";

export const metadata: Metadata = {
  title: coventryLocation.metaTitle,
  description: coventryLocation.metaDescription,
  alternates: {
    canonical: `/locations/${coventryLocation.slug}`
  },
  openGraph: {
    title: coventryLocation.metaTitle,
    description: coventryLocation.metaDescription,
    url: `/locations/${coventryLocation.slug}`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: `https://basiccremation.co.uk/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Basic Cremation in ${coventryLocation.city}`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: coventryLocation.metaTitle,
    description: coventryLocation.metaDescription,
    images: [`https://basiccremation.co.uk/og-image.png`]
  }
};

export default function Page() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: coventryLocation.city, url: `/locations/${coventryLocation.slug}` }
        ]}
      />
      <LocationPage data={coventryLocation} />
    </>
  );
}
