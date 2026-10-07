import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { ServicePage } from "@/components/services/ServicePage";
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return s
    ? { title: s.title, description: s.meta, alternates: { canonical: "/diensten/" + slug } }
    : {};
}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  return <ServicePage slug={s.slug} />;
}
