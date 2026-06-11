import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from './constants';

export const SEO = ({ title, description, image, url, type = 'website' }) => {
  const pageTitle = title ? `${title} — ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const pageDescription = description || SITE_CONFIG.description;
  const pageImage = image || '/og-image.jpg';
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};