import RootLayoutClient from '@/components/layout/RootLayoutClient';
import './globals.css';

export const metadata = {
  metadataBase: new URL('https://gexclub.com'),
  title: {
    default: 'GexClub — Global Ecosystem for eXcellence',
    template: '%s | GexClub',
  },
  description:
    'Comunidad juvenil de desarrollo de software, videojuegos y hackathons para jóvenes de 14 a 18 años. Create. Learn. Collaborate. Excel.',
  openGraph: {
    type: 'website',
    locale: 'es_LA',
    url: 'https://gexclub.com',
    siteName: 'GexClub',
    title: 'GexClub — Global Ecosystem for eXcellence',
    description:
      'Comunidad juvenil de desarrollo de software, videojuegos y hackathons para jóvenes de 14 a 18 años.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GexClub — Global Ecosystem for eXcellence',
    description:
      'Comunidad juvenil de desarrollo de software, videojuegos y hackathons para jóvenes de 14 a 18 años.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('gex_theme');
                  var dark = saved
                    ? saved === 'dark'
                    : window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (dark) document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}