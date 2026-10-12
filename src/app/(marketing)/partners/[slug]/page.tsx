import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LazyFAQAccordion as FAQAccordion } from "@/components/lazy";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { buttonVariants } from "@/components/ui/button";
import { RatingBadge } from "@/components/ui/rating-badge";
import { ReviewsSection } from "@/components/marketing/reviews-section";
import { PartnerBookLink } from "@/components/marketing/partner-book-link";
import { featuredReviews } from "@/data/reviews";
import { FROM_PRICES, type ServiceType } from "@/lib/pricing";
import { PHONE_DISPLAY, SITE_URL, TEL, WHATSAPP_NUMBER } from "@/lib/constants";
import { activePartners, getPartnerBySlug } from "@/lib/partners";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export function generateStaticParams() {
  return activePartners().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) return {};
  return {
    title: { absolute: `${partner.name} landlords | My Landlord Certificate` },
    description: `Landlord certificates for ${partner.name} landlords. Next-day appointments across London and the M25, certificates emailed within 24 hours, fixed prices.`,
    robots: { index: false, follow: false },
    alternates: { canonical: `${SITE_URL}/partners/${partner.slug}` },
  };
}

const SERVICES: { label: string; bookingId: string; priceKey: ServiceType; href: string }[] = [
  { label: "EICR", bookingId: "eicr", priceKey: "eicr", href: "/eicr" },
  { label: "Gas Safety Certificate (CP12)", bookingId: "gas-safety-cp12", priceKey: "gas-safety-cp12", href: "/gas-safety-certificate" },
  { label: "EPC", bookingId: "epc", priceKey: "epc", href: "/epc" },
  { label: "Fire Risk Assessment", bookingId: "fire-risk-assessment", priceKey: "fire-risk-assessment", href: "/fire-risk-assessment" },
  { label: "PAT Testing", bookingId: "pat", priceKey: "pat", href: "/pat-testing" },
];

export default async function PartnerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const partner = getPartnerBySlug(slug);
  if (!partner) notFound();

  const bookHref = `/book?ref=${partner.code}`;
  const whatsappText = `Hi, I'm a ${partner.name} landlord (partner code ${partner.code}) and I'd like to book a certificate.`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappText)}`;
  const phoneDisplay = partner.trackingPhone ?? PHONE_DISPLAY;
  const phoneHref = partner.trackingPhone ? `tel:${partner.trackingPhone}` : TEL;

  const faqs = [
    { question: `Do I pay more through ${partner.name}?`, answer: "No. You pay our standard fixed prices." },
    {
      question: "Who carries out the work?",
      answer:
        "My Landlord Certificate's own accredited engineers: NICEIC approved electricians, Gas Safe registered engineers and accredited assessors.",
    },
    {
      question: "What happens to my details?",
      answer: `We only use them to arrange and complete your booking; see our Privacy Policy. We don't share your personal details with ${partner.name}.`,
    },
  ];

  return (
    <>
      <Section spacing="lg" className="bg-warm-white">
        <Container className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-compliance-blue mb-3">{partner.name} partner</p>
          <Heading level={1} className="mb-4">
            Landlord certificates for {partner.name} landlords
          </Heading>
          <p className="text-lg text-brand-charcoal/80 mb-6">
            Next-day appointments across London and the M25 (book by 5pm). Certificates emailed within 24 hours. Fixed prices.
          </p>
          <RatingBadge className="mb-8" />

          <div className="rounded-xl border-2 border-dashed border-compliance-blue/50 bg-white p-5 mb-8">
            <p className="text-lg text-brand-charcoal">
              Your partner code: <strong className="font-bold tracking-wider">{partner.code}</strong>
            </p>
            <p className="text-sm text-brand-grey mt-1">Applied automatically when you book online. Quote it if you call or WhatsApp us.</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <PartnerBookLink href={bookHref}>Book online</PartnerBookLink>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
            >
              WhatsApp us
            </a>
            <a href={phoneHref} className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              Call {phoneDisplay}
            </a>
          </div>
          <p className="text-sm text-brand-grey mt-3">Calling? Please quote code {partner.code}.</p>
        </Container>
      </Section>

      <Section spacing="md">
        <Container className="max-w-4xl">
          <Heading level={2} className="mb-6">
            Certificates you can book
          </Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.bookingId}
                href={`${bookHref}&service=${s.bookingId}`}
                className="rounded-xl border border-border bg-white p-5 transition-colors hover:border-compliance-blue"
              >
                <p className="font-semibold text-brand-charcoal">{s.label}</p>
                <p className="mt-1 text-compliance-blue font-bold">{FROM_PRICES[s.priceKey]}</p>
                <p className="mt-3 text-sm font-semibold text-compliance-blue">Book now →</p>
              </Link>
            ))}
            <Link
              href="/landlord-certificates-bundle"
              className="rounded-xl border border-border bg-white p-5 transition-colors hover:border-compliance-blue"
            >
              <p className="font-semibold text-brand-charcoal">Certificate bundles</p>
              <p className="mt-1 text-sm text-brand-grey">Several certificates in one visit</p>
              <p className="mt-3 text-sm font-semibold text-compliance-blue">See bundles →</p>
            </Link>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="bg-warm-white">
        <Container>
          <ReviewsSection reviews={featuredReviews().slice(0, 3)} />
        </Container>
      </Section>

      <Section spacing="md">
        <Container className="max-w-4xl">
          <Heading level={2} className="mb-6">
            Questions
          </Heading>
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
    </>
  );
}
