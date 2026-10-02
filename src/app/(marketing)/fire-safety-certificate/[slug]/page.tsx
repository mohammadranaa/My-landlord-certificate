import { LocationServicePage, generateLocationMetadata, generateLocationStaticParams } from "@/components/location/LocationServicePage";

export const generateStaticParams = generateLocationStaticParams;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generateLocationMetadata("fire-safety-certificate", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LocationServicePage serviceKey="fire-safety-certificate" slug={slug} />;
}
