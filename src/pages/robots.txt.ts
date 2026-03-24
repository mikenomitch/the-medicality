import { SITE_URL } from "../consts";

export function GET() {
  const body = [
    "User-agent: *",
    "Allow: /",
    `Sitemap: ${new URL("/sitemap-index.xml", SITE_URL).toString()}`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
