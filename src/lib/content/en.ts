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
      label: "Greek",
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
          "Additional languages (Greek, Russian or Spanish)",
          "Specific features, such as bookings or online orders",
          "Ongoing support for content changes/additions",
        ],
      },
    ],
    note: "",
  },
  process: {
    title: "The process",
    description:
      "The whole process usually takes around 1–2 weeks and we will stay in touch throughout.",
    steps: [
      {
        title: "I understand your business",
        description:
          "We talk about what you do, what you need, who your customers are and whether it makes sense for us to work together.",
      },
      {
        title: "You send me the essentials",
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
    description: `Hey, I’m Kyriakos and I’ve been building websites on the side for 7 years now, with my main career being in Business and Project Development.

My goal with a website is creating a professional digital image of your business that aligns with your brand and turns visitors into customers.

What do you have in mind?`,
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
        label: "Any details?",
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
