import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
}

const SEO: React.FC<Props> = ({ title, description, keywords = [], image }) => {
  const defaultDescription =
    "提供專業且透明的生前契約及塔位媒合服務，讓您安心規劃未來。";
  const defaultKeywords = ["生前契約", "塔位", "媒合平台", "殯葬服務"];
  const siteUrl = process.env.REACT_APP_SITE_URL || "https://example.com";

  return (
    <Helmet>
      <title>{`${title} | 生前契約服務平台`}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta
        name="keywords"
        content={[...defaultKeywords, ...keywords].join(", ")}
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
