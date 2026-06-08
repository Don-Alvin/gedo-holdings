import { SITE_URL } from "@/lib/site";

export default function robots() {
  return `User-agent: *
Allow: /
Sitemap: ${SITE_URL}/sitemap.xml
`;
}
