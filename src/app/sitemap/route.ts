import { getDynamicPath, staticPaths } from "@/utils/lib/api";

const DOMAIN = "https://topmass.vn";

export async function GET() {
  const dynamicPaths = await getDynamicPath();
  const urls = [...staticPaths, ...dynamicPaths].map(
    (path) =>
      `
        <url>
          <loc>${DOMAIN}${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>
      `
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

export const runtime = "edge";
