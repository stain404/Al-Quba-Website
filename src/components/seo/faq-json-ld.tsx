export interface FaqItem {
  question: string
  answer: string
}

/** Renders an FAQPage JSON-LD script — makes a page's FAQ accordion eligible for Google's FAQ rich result. */
export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  )
}
