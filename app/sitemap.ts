import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** Alle indexeerbare pagina's. Privacy en voorwaarden ontbreken bewust: die staan nog op noindex (concept). */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    ...services.map((s) => `/diensten/${s.slug}`),
    "/prijzen",
    "/projecten",
    ...projects.map((p) => `/projecten/${p.slug}`),
    "/over-ons",
    "/website-audit",
    "/contact",
  ];
  return routes.map((route) => ({
    url: route === "/" ? SITE.url : SITE.url + route,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
