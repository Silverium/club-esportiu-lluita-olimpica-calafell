import { Organization, WithContext } from "schema-dts";
const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "image": "https://www.lluitacalafell.com/favicon/safari-pinned-tab.svg",
  "url": process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL : process.env.NODE_ENV === 'production' ? 'https://www.lluitacalafell.com' : '',
  // "sameAs": ["https://example.net/profile/example1234", "https://example.org/example1234"],
  "logo": "https://www.lluitacalafell.com/favicon/safari-pinned-tab.svg",
  "name": "C.E. Lluita Olímpica Calafell",
  "description": "Entitat esportiva federada a la Federació Catalana de Lluita i a la Federació Espanyola de Lluita, dedicada a la promoció de la lluita olímpica a Calafell, al Baix Penedès i a Catalunya.",
  "email": "lluitaolimpicacalafell@gmail.com",
  "telephone": "+34636557181",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaça Cosme Maine",
    "addressLocality": "Calafell",
    "addressCountry": "ES",
    "addressRegion": "Tarragona",
    "postalCode": "43820"
  },
  sponsor: {
    "@type": "Person",
    "name": "Soldeplata Saketos",
    "url": "https://www.soldeplata.dev",
    "description": "Desenvolupador web freelance especialitzat en tecnologies modernes com React, Next.js, Tailwind CSS, Sanity i Vercel.",
    "email": "soldeplatadeveloper@gmail.com",
  },
};
/**
 * All the shared stuff that goes into <head> on `(blog)` routes, can be be imported by `head.tsx` files in the /app dir or wrapped in a <Head> component in the /pages dir.
 */

export default function BlogMeta() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      >
      </script>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json"></link>
      <meta name="msapplication-TileColor" content="#ffffff"></meta>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
    </>
  )
}
