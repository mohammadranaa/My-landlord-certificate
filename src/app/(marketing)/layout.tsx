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
  image: `${SITE_URL}/og-default.jpg`,
  telephone: PHONE_NUMBER,
  email: EMAIL,
  priceRange: "££",
  description:
    "Fixed-price landlord compliance certificates booked online — EICR, Gas Safety (CP12), EPC, Fire Risk Assessment, PAT Testing and Fire Safety Certificates. Accredited engineers across all 33 London boroughs and the M25 area, certificate emailed within 24 hours.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "134 Merton High St",
    addressLocality: "London",
    postalCode: "SW19 1BA",
    addressCountry: "GB",
  },
  areaServed: [
    { "@type": "City", name: "London" },
    { "@type": "AdministrativeArea", name: "Greater London and the M25 area" },
  ],
  sameAs: [
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
