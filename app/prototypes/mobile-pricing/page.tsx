import type { Metadata } from "next";
import { PricingPrototype } from "./PricingPrototype";
export const metadata: Metadata = {
  title: "Mobiele prijskaarten — 3 prototypes",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <PricingPrototype />;
}
