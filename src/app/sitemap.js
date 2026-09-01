const ROUTES = ['', '/about', '/community', '/hackathons', '/projects', '/faq', '/contacto'];

export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gexclub.com';
  return ROUTES.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
