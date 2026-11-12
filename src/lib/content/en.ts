import { sectionIds, siteConfig } from "../site";
import type { SiteContent } from "../../types/content";

export const enContent: SiteContent = {
  locale: "en",
  metadata: {
    title:
      "Professional Websites for Small Businesses in Cyprus | One Page Cyprus",
    description:
      "Straightforward, modern websites for small businesses and self-employed professionals in Cyprus. From €850.",
  },
  header: {
    brand: siteConfig.name,
    homeHref: "/en",
    navigation: [
      { label: "Process", href: `#${sectionIds.process}` },
      { label: "Pricing", href: `#${sectionIds.packages}` },
      { label: "Example", href: `#${sectionIds.examples}` },
    ],
    cta: { label: "Get in touch", href: `#${sectionIds.contact}` },
    localeSwitch: {
      label: "Ελληνικά",
      href: "/",
      ariaLabel: "Switch language to Greek",
    },
  },
  hero: {
    title: "Web design that speaks to the Cypriot audience",
    description: "Modern Websites | Clear Process | Fair Pricing",
    primaryCta: { label: "Get in touch", href: `#${sectionIds.contact}` },
    secondaryCta: { label: "See pricing", href: `#${sectionIds.packages}` },
    trustNote:
      "For small businesses and self-employed professionals who need a strong online presence.",
  },
  problem: {
    title: "Why are you quoted €5,000 for a simple website?",
    paragraphs: [
      { text: "1. You may not yet know exactly what you need", tone: "strong" },
      {
        text: "It is not your job to know how a website should be designed or what it should say. But when the brief is unclear, developers and designers have to spend extra time trying ideas and revising them until something feels right.",
      },
      { text: "2. You are asking the wrong places", tone: "strong" },
      {
        text: "Large agencies build websites and apps for major businesses. Those projects cost tens of thousands and need big teams, so even getting their attention can be expensive.",
      },
      {
        text: "3. You are asking for things that are more complex than you need",
        tone: "strong",
      },
      {
        text: "They can sound and look impressive, but in practice they may not be necessary for your business.",
      },
    ],
    needsTitle: "What you actually need",
    needs: [
      "A professional first impression that speaks to potential customers",
      "Clear information about what you offer",
      "An easy way for people to contact you",
      "Something polished that you can share on your van, Instagram and everywhere else",
    ],
  },
  packages: {
    title: "Yes, but... how much?",
    description: "",
    includesLabel: "Includes",
    packages: [
      {
        name: "The essentials package",
        price: "€850",
        bestFor:
          "Ideal for small and medium-sized businesses and self-employed professionals",
        description: "",
        includes: [
          "Advice on what to build",
          "Up to 2 pages",
          "Modern design",
          "Works well on phones, tablets and computers",
          "One language (English)",
          "Clear information about your business",
          "Essential ways for customers to get in touch",
          "Domain registration for the first year (basic cost around €20/year)",
          "Two rounds of revisions",
        ],
      },
      {
        name: "Need more?",
        price: "",
        bestFor: "",
        description: "",
        includes: [
          "Additional pages",
          "A contact form",
          "Additional revisions and changes",
          "A photo gallery",
          "Analytics and reporting so you can see who visits your site",
          "Additional languages (potentially Greek, Russian or Spanish)",
          "Specific features, such as bookings or online orders",
          "Ongoing support for small content changes and additions",
        ],
      },
    ],
    note: "",
  },
  process: {
    title: "The process",
    description:
      "The whole process usually takes around 1–2 weeks. We will stay in touch throughout.",
    steps: [
      {
        title: "I get to know what you need",
        description:
          "We talk about what you do, what you need, who your customers are and whether it makes sense for us to work together.",
      },
      {
        title: "You send the essentials",
        description:
          "Your logo, photos, processes and anything else you already have.",
      },
      {
        title: "I build your website",
        description:
          "I create the website around your needs, then we make the changes you would like.",
      },
      {
        title: "Payment and we go live",
        description:
          "We choose the name you want (for example, onepage.com.cy), you pay me, and we go online.",
      },
    ],
  },
  examples: {
    title: "What your website could look like",
    project: {
      featuredLabel: "EXAMPLE",
      name: "LVG Blinds",
      description:
        "A website for a company providing indoor and outdoor shading solutions.",
      highlights: [
        "A clear presentation of the services",
        "Products shown with photographs",
        "Simple ways for customers to get in touch",
      ],
      ctaLabel: "View website",
      website: "https://www.lvgblinds.com",
      desktopImage: "/images/lvg-blinds-desktop.jpg",
      desktopImageAlt: "The LVG Blinds website on a desktop computer",
      mobileImage: "/images/lvg-blinds-mobile.jpg",
      mobileImageAlt: "The LVG Blinds website on a mobile phone",
    },
  },
  whyUs: {
    title: "Why work with me",
    description: `Hello, I’m Kyriakos. I have been building websites for the past seven years alongside my work in business, programme and project development.

My aim is to create a professional online presence that suits your business and helps turn visitors into customers.

Tell me what you have in mind.`,
    image: "/images/masonou.jpeg",
    imageAlt: "Kyriakos Masonou",
    linkedInLabel: "Kyriakos Masonou on LinkedIn",
    instagramLabel: "Kyriakos Masonou on Instagram",
  },
  contact: {
    title: "Tell me what you need",
    whatsappCtaLabel: "Message me on WhatsApp",
    whatsappMessage:
      "Hello Kyriakos! I’m interested in a website for my business.",
    formDividerLabel: "or",
    selectPlaceholder: "Select an option",
    emailSubject: `${siteConfig.name} contact request`,
    formFields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "",
        required: true,
      },
      {
        name: "phone",
        label: "Phone number",
        type: "tel",
        placeholder: "",
        required: true,
      },
      {
        name: "preferredCommunication",
        label: "How would you prefer me to get in touch?",
        type: "select",
        options: [
          { label: "WhatsApp", value: "whatsapp", preferred: true },
          { label: "Viber", value: "viber" },
          { label: "Email", value: "email" },
        ],
      },
      {
        name: "businessName",
        label: "Business name",
        type: "text",
        placeholder: "",
      },
      {
        name: "existingWebsite",
        label: "Do you already have a website?",
        type: "select",
        options: [
          { label: "No", value: "no" },
          { label: "Yes", value: "yes" },
        ],
      },
      {
        name: "needs",
        label: "What do you need?",
        type: "textarea",
        placeholder:
          "Briefly describe what your business does. If you already have a website or social-media pages for your business (Instagram or Facebook), send them here.",
      },
    ],
    ctaLabel: "Send",
  },
  footer: {
    brand: siteConfig.name,
    tagline: "Straightforward websites for small businesses in Cyprus",
    localeLinks: [
      { label: "Greek", href: "/" },
      { label: "English", href: "/en" },
    ],
    email: siteConfig.email,
  },
};
