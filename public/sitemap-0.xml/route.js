// app/sitemap-0.xml/route.js
import { Properties } from "@/data/properties.json";

export async function GET() {
  const baseUrl = "https://www.nagpurheights.com";

  // Static routes
  const staticRoutes = [
    "", "buy", "emi-calculator", "contact", "commercial", "research-insights",
    "login", "blogs", "about", "agents", "rent", "property", 
    "InvestmentHotspotNagpur", "rates&trends",
    "blogs/2bhk-3bhk-flats-nagpur", "blogs/Lets Connect",
    "blogs/nagpur-heights-overview", "blogs/residential-plots-nagpur",
    "blogs/why-choose-nagpur-heights"
  ];

  const staticUrls = staticRoutes.map((route) => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>
  `);

  // Dynamic property routes
  const dynamicUrls = Properties.map((property) => {
    const slug = `${property.id}-${property.title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`;

    return `
      <url>
        <loc>${baseUrl}/property/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `;
  });

  const fullXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${staticUrls.join("")}
  ${dynamicUrls.join("")}
</urlset>`;

  return new Response(fullXml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
