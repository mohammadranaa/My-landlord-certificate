import { LocationServicePage, generateLocationMetadata, generateLocationStaticParams } from "@/components/location/LocationServicePage";

export const generateStaticParams = generateLocationStaticParams;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return generateLocationMetadata("boiler-installation", slug);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <LocationServicePage serviceKey="boiler-installation" slug={slug} />;
}
