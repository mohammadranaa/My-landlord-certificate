import { NavBar } from "@/components/ui/nav-bar";
import { Footer } from "@/components/ui/footer";
import { JsonLd } from "@/components/shared/json-ld";
import { SITE_URL, PHONE_NUMBER, EMAIL } from "@/lib/constants";

// Site-wide business entity — carried on every public marketing page so search
// and answer engines have a single canonical Organization/LocalBusiness node.
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "My Landlord Certificate",
  legalName: "My Landlord Certificate Ltd",
  url: SITE_URL,
  logo: `${SITE_URL}/header-logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: PHONE_NUMBER,
  email: EMAIL,
  priceRange: "££",
  description:
    "Fixed-price landlord compliance certificates booked online — EICR, Gas Safety (CP12), EPC, Fire Risk Assessment, PAT Testing and Fire Safety Certificates. Accredited engineers across all 33 London boroughs and the M25 area, certificate emailed within 24 hours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "134 Merton High Street",
    addressLocality: "London",
    addressRegion: "Greater London",
    postalCode: "SW19 1BA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.415969,
    longitude: -0.187741,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London and the M25 area" },
  ],
  currenciesAccepted: "GBP",
  paymentAccepted: "Credit Card, Debit Card",
  sameAs: [
    "https://share.google/Mv45RjwKpz36PD8Uk",
    "https://uk.trustpilot.com/review/mylandlordcertificate.co.uk",
    "https://www.facebook.com/profile.php?id=61589410869490",
    "https://www.instagram.com/mylandlordcertificate",
    "https://www.linkedin.com/company/my-landlord-certificate/",
  ],
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
