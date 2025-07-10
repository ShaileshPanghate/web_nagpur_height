// app/sitemap.xml/route.js
import { Properties } from '../../data/properties.json'; // adjust path if needed

export async function GET() {
  const baseUrl = 'https://www.nagpurheights.com';

  const staticPages = [
    '',
    '/property',
    '/contact',
    '/about',
    '/buy',
    '/rent',
    '/emi-calculator',
    '/blogs',
  ];

  const staticUrls = staticPages.map((path) => `
    <url>
      <loc>${baseUrl}${path}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.7</priority>
    </url>`).join('');

  const dynamicUrls = Properties.map((property) => {
    const slug = `${property.id}-${property.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')}`;
    return `
      <url>
        <loc>${baseUrl}/property/${slug}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.9</priority>
      </url>`;
  }).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls}
    ${dynamicUrls}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
