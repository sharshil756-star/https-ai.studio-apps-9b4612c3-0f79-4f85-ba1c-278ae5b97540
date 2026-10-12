import { CricketArticle } from '../data/articles';
import { HOMEPAGE_SEO } from '../data/seoData';

export function updatePageSEO(article: CricketArticle | null, path: string) {
  const origin = window.location.origin;
  const canonicalUrl = `${origin}${path === '/' ? '' : path}`;

  if (article) {
    // Article Page SEO
    document.title = `${article.metaTitle} | The Willow & Seam`;

    setMetaTag('description', article.metaDescription);
    setMetaProperty('og:title', `${article.metaTitle} | The Willow & Seam`);
    setMetaProperty('og:description', article.metaDescription);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:type', 'article');
    setMetaTag('twitter:title', `${article.metaTitle} | The Willow & Seam`);
    setMetaTag('twitter:description', article.metaDescription);

    // JSON-LD structured data: Article + FAQPage (for AEO)
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "author": {
          "@type": "Person",
          "name": article.author.name,
          "jobTitle": article.author.role
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Willow & Seam",
          "logo": {
            "@type": "ImageObject",
            "url": `${origin}/favicon.ico`
          }
        },
        "datePublished": "2026-10-01",
        "mainEntityOfPage": canonicalUrl,
        "keywords": [article.mainKeyword, ...article.relatedKeywords].join(", ")
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": article.faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ];

    injectJsonLd(jsonLd);
  } else {
    // Homepage / Section SEO
    document.title = HOMEPAGE_SEO.titleTag;

    setMetaTag('description', HOMEPAGE_SEO.metaDescription);
    setMetaProperty('og:title', HOMEPAGE_SEO.titleTag);
    setMetaProperty('og:description', HOMEPAGE_SEO.metaDescription);
    setMetaProperty('og:url', canonicalUrl);
    setMetaProperty('og:type', 'website');
    setMetaTag('twitter:title', HOMEPAGE_SEO.titleTag);
    setMetaTag('twitter:description', HOMEPAGE_SEO.metaDescription);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "The Willow & Seam",
      "description": HOMEPAGE_SEO.metaDescription,
      "url": canonicalUrl,
      "publisher": {
        "@type": "Organization",
        "name": "The Willow & Seam"
      },
      "keywords": [HOMEPAGE_SEO.mainKeyword, HOMEPAGE_SEO.relatedKeyword1, HOMEPAGE_SEO.relatedKeyword2].join(", ")
    };

    injectJsonLd(jsonLd);
  }

  // Canonical Link Tag
  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.rel = 'canonical';
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.href = canonicalUrl;
}

function setMetaTag(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function injectJsonLd(data: any) {
  let script = document.getElementById('seo-json-ld');
  if (!script) {
    script = document.createElement('script');
    script.id = 'seo-json-ld';
    script.setAttribute('type', 'application/ld+json');
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data, null, 2);
}
