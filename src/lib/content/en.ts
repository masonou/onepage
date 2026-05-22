import { sectionIds, siteConfig } from "../site";
import type { SiteContent } from "../../types/content";

export const enContent: SiteContent = {
  locale: "en",
  header: {
    brand: siteConfig.name,
    navigation: [
      { label: "Who it's for", href: `#${sectionIds.whoItsFor}` },
      { label: "Packages", href: `#${sectionIds.packages}` },
      { label: "How it works", href: `#${sectionIds.process}` },
      { label: "FAQ", href: `#${sectionIds.faq}` },
      { label: "Contact", href: `#${sectionIds.contact}` },
    ],
    cta: { label: "Get a quote", href: `#${sectionIds.contact}` },
  },
  hero: {
    title: "Simple websites for small businesses in Cyprus",
    description:
      "Modern, mobile-friendly websites starting from €500. Clear process, no unnecessary complexity, and no agency-level pricing.",
    primaryCta: { label: "Get a free quote", href: `#${sectionIds.contact}` },
    secondaryCta: { label: "View packages", href: `#${sectionIds.packages}` },
    trustNote:
      "Built for local businesses, solo professionals, and service providers who need a professional online presence without overpaying.",
    highlights: [
      "Starting from €500 for a clear, practical marketing website.",
      "Prepared for Greek and English from the start.",
      "Built to look professional on mobile, tablet, and desktop.",
    ],
  },
  whoItsFor: {
    title: "Who this is for",
    description:
      "This service is for businesses that need a clean, professional website that explains what they do and makes it easy for customers to contact them.",
    items: [
      "Solo professionals",
      "Tutors and educators",
      "Cafes and restaurants",
      "Beauty salons and barbers",
      "Tradesmen and local services",
      "Small shops and local businesses",
      "Consultants and service providers",
      "New businesses that need a simple launch",
    ],
  },
  problem: {
    title: "Most small businesses do not need a €5,000 website",
    paragraphs: [
      "Many website quotes are high because the process is unclear. Agencies often need to spend time on research, strategy, revisions, and custom features before the actual website is even built.",
      "For many small businesses, that is too much.",
    ],
    needsTitle: "What you usually need is simple",
    needs: [
      "A professional first impression",
      "Clear information about your services",
      "A way for customers to contact you",
      "A website that works well on mobile",
      "Basic SEO foundations so people can find you",
    ],
  },
  packages: {
    title: "Simple packages, clear pricing",
    description:
      "Choose the level of structure that fits your business today. The goal is always to keep the website clear, useful, and affordable.",
    packages: [
      {
        name: "Starter",
        price: "From €500",
        bestFor: "Best for: Solo professionals and simple personal brands",
        description:
          "A clean one-page website for professionals who need a simple online presence. Inspired by simple personal and professional websites like thepsyeducator.co.uk.",
        includes: [
          "One-page website",
          "Mobile-friendly design",
          "Greek and English structure prepared",
          "Contact section",
          "Basic SEO setup",
          "Help with domain and launch",
        ],
      },
      {
        name: "Business",
        price: "From €800",
        bestFor: "Best for: Small businesses that need more structure",
        description:
          "A stronger one-page website with clearer sections, better service presentation, and more trust-building content.",
        includes: [
          "Everything in Starter",
          "More detailed service sections",
          "FAQ section",
          "Google Maps and contact details",
          "Stronger homepage structure",
          "Better conversion-focused layout",
          "Optional booking link or WhatsApp CTA",
        ],
      },
      {
        name: "Premium",
        price: "From €1,000",
        bestFor: "Best for: Businesses that need a more complete online presence",
        description:
          "A more polished website for businesses that need to present multiple services, products, or categories. Inspired by websites like lvgblinds.com.",
        includes: [
          "Everything in Business",
          "More advanced page structure",
          "Multiple service and category sections",
          "Stronger visual design",
          "More detailed SEO setup",
          "More time for content refinement",
          "Launch support",
        ],
      },
      {
        name: "Custom",
        price: "Custom quote",
        bestFor: "Best for: Businesses that need something more specific",
        description:
          "For projects that need extra pages, more content, special sections, or a more tailored structure.",
        includes: [
          "Custom page structure",
          "Extra pages if needed",
          "More advanced content support",
          "Custom integrations where appropriate",
          "Ongoing support options if needed",
        ],
      },
    ],
    note: "Prices depend on the amount of content, pages, revisions, and any extra setup needed. The goal is always to keep things simple, clear, and affordable.",
  },
  process: {
    title: "How it works",
    description:
      "A simple process keeps the project moving and avoids the confusion that usually makes websites expensive.",
    steps: [
      {
        title: "We understand your business",
        description:
          "Short call or message exchange to understand what you do, who your customers are, and what the website needs to say.",
      },
      {
        title: "You send the basics",
        description:
          "Logo, photos, services, contact details, and any text you already have. If you do not have everything ready, we can guide you.",
      },
      {
        title: "We build the website",
        description:
          "We create the structure, design the page, add the content, and prepare the site for mobile and search engines.",
      },
      {
        title: "Review and launch",
        description:
          "You review the website, we make final adjustments, connect the domain, and launch it.",
      },
    ],
  },
  examples: {
    title: "Example website styles",
    description:
      "Here are a few simple directions this can take, depending on the type of business and how much structure you need.",
    items: [
      {
        title: "Solo professional website",
        description:
          "A simple one-page website for a tutor, consultant, therapist, or educator.",
      },
      {
        title: "Local business website",
        description:
          "A clean website for a cafe, salon, shop, gym, or service provider.",
      },
      {
        title: "Service company website",
        description:
          "A more complete website for businesses with multiple services or product categories.",
      },
    ],
    note: "Real project examples will be added soon.",
  },
  whyUs: {
    title: "Why choose us",
    description:
      "This service is designed for businesses that want a strong online presence without being pushed into a bigger project than they need.",
    items: [
      {
        title: "Built for small businesses",
        description:
          "We focus on businesses that need clarity, not unnecessary complexity.",
      },
      {
        title: "Clear pricing",
        description:
          "Starting prices are visible from the beginning, so there are no surprises.",
      },
      {
        title: "Greek and English ready",
        description:
          "The website structure is prepared for both languages from the start.",
      },
      {
        title: "Simple process",
        description:
          "We guide you through what is needed and keep the project moving.",
      },
      {
        title: "Mobile-friendly",
        description:
          "Your website will be built to look good on phones, tablets, and desktops.",
      },
      {
        title: "SEO foundations",
        description:
          "We set up the basics properly so your website has a better chance of being found.",
      },
    ],
  },
  faq: {
    title: "FAQ",
    description:
      "Straight answers to the questions most small businesses ask before getting started.",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "Packages start from €500. The final price depends on the size of the website, content, number of sections, and any extra setup needed.",
      },
      {
        question: "How long does it take?",
        answer:
          "A simple website can usually be completed quickly once the content is ready. Bigger or more detailed websites may take longer.",
      },
      {
        question: "Do I need to have the text ready?",
        answer:
          "No. If you already have text, we can use it. If not, we can help structure the content and guide you on what is needed.",
      },
      {
        question: "Will the website be in Greek and English?",
        answer:
          "Yes. The website can be prepared for both Greek and English. Greek is especially important for local Cypriot businesses.",
      },
      {
        question: "Can customers contact me through the website?",
        answer:
          "Yes. The website can include a contact form, phone number, email, WhatsApp button, booking link, or Google Maps location.",
      },
      {
        question: "Is hosting included?",
        answer:
          "We can guide you through domain and hosting setup. The exact setup depends on what you already have and what the website needs.",
      },
      {
        question: "Can I update the website later?",
        answer:
          "Yes. Small updates can be handled later, and we can discuss simple support options if you need ongoing changes.",
      },
      {
        question: "Is this suitable for every business?",
        answer:
          "This is best for businesses that need a marketing website. It is not meant for complex platforms, apps, dashboards, or custom software.",
      },
    ],
  },
  contact: {
    title: "Tell us what you need",
    description:
      "Send a few details about your business and we will tell you what package makes the most sense.",
    formFields: [
      { name: "name", label: "Name", type: "text", placeholder: "Your name" },
      {
        name: "businessName",
        label: "Business name",
        type: "text",
        placeholder: "Your business name",
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "you@example.com",
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "+357",
      },
      {
        name: "businessType",
        label: "What type of business do you have?",
        type: "text",
        placeholder: "Tutor, cafe, salon, tradesman...",
      },
      {
        name: "existingWebsite",
        label: "Do you already have a website?",
        type: "select",
        options: ["No", "Yes"],
      },
      {
        name: "needs",
        label: "What do you need?",
        type: "textarea",
        placeholder: "Tell us about your business, your services, and what you want the website to help with.",
      },
    ],
    ctaLabel: "Get a free quote",
    formNote:
      "This form is ready for the final design now. Submission can be connected later when the contact workflow is confirmed.",
    detailsTitle: "What helps us quote quickly",
    details: [
      "A short summary of what your business does.",
      "Any existing website, Instagram page, or Google Business listing.",
      "What you want the website to explain or help customers do.",
      `Prefer email instead? You can reach us at ${siteConfig.email}.`,
    ],
  },
  footer: {
    brand: siteConfig.name,
    tagline: "Simple websites for small businesses in Cyprus",
    localeLinks: [
      { label: "Greek", href: "/" },
      { label: "English", href: "/en" },
    ],
    email: siteConfig.email,
  },
};
