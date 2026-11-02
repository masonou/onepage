// TODO: Translate this file into Greek. This is currently using English placeholder content.
import { sectionIds, siteConfig } from "../site";
import type { SiteContent } from "../../types/content";

export const elContent: SiteContent = {
  locale: "el",
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
    title: "Θέλεις Ιστοσελίδα αλλά ούλλοι κόφκουν κελλέ; Δαμέ είσαι!",
    description: "Μοντέρνες Ιστοσελίδες | Ξεκάθαρη Διαδικασία | Φιλική Τιμή",
    primaryCta: { label: "Επικοινώνησε", href: `#${sectionIds.contact}` },
    secondaryCta: { label: "Πόσα", href: `#${sectionIds.packages}` },
    trustNote:
      "Για μικρές επιχειρήσεις και ελεύθερους επαγγελματίες που χρειάζονται εμφάνιση στο διαδίκτυο χωρίς να πιερώσουν τα μανοτζέφαλα τους.",
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
    title: "Γιατί σου ζητούν €5,000 για μιαν απλή ιστοσελίδα;",
    paragraphs: [
      { text: "1. Εν ξέρεις τι θέλεις", tone: "strong" },
      {
        text: "Ένεν η δουλεία σου να ξέρεις πως πρέπει να σχεδιαστεί μια ιστοσελίδα τζαι τη να γραφτεί μέσα. Αλλά επειδή εν ξέρεις, οι προγραμματιστές τζαι σχεδιαστές ενα πρέπει να φαν τις ώρες τους να κάμνουν και να ξανα-κάμνουν τι σελίδα σου όσπου να κουτσίσουν κάτι που σου αρέσκει.",
      },
      { text: "2. Ρωτάς σε λάθος τόπους", tone: "strong" },
      {
        text: "Ρωτάς σε μεγάλες εταιρείες που κάμνουν εφαρμογές για τράπεζες, φόρεξ τζαι αλυσίδες. Εφαρμογές που κοστίζουν δεκάδες σσιλίαες. Μόνο τζαι μόνο για να σχοληθούν ενα πρέπει να σσιονόσσεις λεφτά.",
      },
      { text: "3. Ζητάς πράματα που εν πολύπλοκα", tone: "strong" },
      {
        text: "Πράματα που ακούουντε τζαι φαίνουνται ωραία, αλλά στην πραγματικότητα εν τα χρειάζεσαι.",
      },
    ],
    needsTitle: "Το τι χρειάζεσαι πραγματικά είναι απλό",
    needs: [
      "Επαγγελματική πρώτη εντύπωση που μιλά στους πιθανούς σου πελάτες",
      "Ξεκάθαρες πληροφορίες για το τι προσφέρεις",
      "Ενά τρόπο να επικοινωνήσουν μαζί σου εύκολα",
      "Κάτι εμφανίσημο που μπόρεις να διαφημίσεις στο βανούι σου, αλλά τζαι στο ίνσταγκραμ",
    ],
  },
  packages: {
    title: "Ναι αλλά.. Πόσα;",
    description: "",
    packages: [
      {
        name: "Βασικό Πακέτο με ότι Χρειάζεσαι",
        price: "€850",
        bestFor:
          "Ιδανικό για μικρομεσαίες επιχειρήσεις και ελέυθερους επαγγελματίες",
        description: "",
        includes: [
          "Συμβουλή για το τι να κάμουμε",
          "Μαξ 2 σελίδες",
          "Μοντέρνο design",
          "Παρουσιάσιμη σε τηλέφωνα, τάμπλετ και κομπιούτερ",
          "Μια γλώσσα (Αγγλικά)",
          "Ξεκάθαρες πληροφορίες για τη δουλεία σου",
          "Βασικούς τρόπους επικοινωνίας",
          "Εγγραφή του ονόματος για το πρώτο χρόνο (βασικό κόστος γύρω στα €20/χρόνο)",
          "Δύο αναθεωρήσεις για αλλαγές",
        ],
      },
      {
        name: "Θέλεις έξτρα",
        price: "",
        bestFor: "",
        description: "",
        includes: [
          "Επιπλέων σελίδες",
          "Φόρμα επικοινωνίας",
          "Επιπλέων αναθεωρήσεις/αλλαγές",
          "Γκαλερί φωτογραφιών",
          "Αναλυτικά στοιχεία / αναφορές για να ξέρεις ποιοί επισκέπτονται τη σελίδα σου",
          "Επιπλέων γλώσσες (πιθανότητα για Ελληνικά, Ρώσικα, Ισπανικά)",
          "Συγκεκριμένες λειτουργίες (π.χ. κρατήσεις, online παραγγελίες, κλπ.)",
          "Συνεχής υποστήριξη για μικρές αλλαγές/προσθήκες περιεχομένου",
        ],
      },
    ],
    note: "",
  },
  process: {
    title: "Η Διαδικασία",
    description:
      "Ούλλη διαδικασία πέρνει περίπου 1-2 εβδομάδες. Καθόλη τη διάρκεια θα είμαστε σε επικοινωνία.",
    steps: [
      {
        title: "Καταλάβω τις ανάγκες σου",
        description:
          "Ένα δεκάλεπτο τηλεφώνημα για να καταλάβω τι κάμνεις, τι χρειάζεσαι, ποιοί εν οι πελάτες σου, τζαι αν κάμνει να δουλέψουμε μαζί.",
      },
      {
        title: "Στέλνεις μου τα βασικά",
        description:
          "Λογότυπο, Φωτογραφίες, διαδικασίες, και γενικά ότι έσσεις. Ένεν ανάγκη να τα σκεφτείς τωρά τούτα όμως.",
      },
      {
        title: "Χτίζω τη σελίδα",
        description:
          "Δημιουργώ την ιστοσελίδα βάση των αναγκών σου και κάμνουμε αλλαγές που θέλεις (1 φορά).",
      },
      {
        title: "Πληρωμή και Πάμεν Online",
        description:
          "Βρίσκουμε το όνομα που θέλεις (π.χ. onepage.com.cy), πληρώνεις με, και πάμεν online.",
      },
    ],
  },
  examples: {
    title: "See what your website could look like",
    project: {
      name: "LVG Blinds",
      description:
        "A website that presents the company’s indoor and outdoor shading solutions and gives visitors a clear way to enquire.",
      highlights: [
        "Clear service presentation",
        "Responsive design",
        "Easy access to contact and consultation enquiries",
      ],
      website: "https://www.lvgblinds.com",
      desktopImage: "/images/lvg-blinds-desktop.jpg",
      mobileImage: "/images/lvg-blinds-mobile.jpg",
    },
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
    title: "Πε μου τι θέλεις",
    description:
      "Αν πρωτιμάς να επικοινωνήσεις κατευθείας στείλμου μύνημα στο WhatsApp, +35799194313.",
    formFields: [
      {
        name: "name",
        label: "Όνομα",
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
        label: "Τηλέφωνο",
        type: "tel",
        placeholder: "",
        required: true,
      },
      {
        name: "preferredCommunication",
        label: "Πως προτιμάς να επικοινωνήσω;",
        type: "select",
        options: [
          { label: "WhatsApp", value: "whatsapp", preferred: true },
          { label: "Viber", value: "viber" },
          { label: "Email", value: "email" },
        ],
      },
      {
        name: "businessName",
        label: "Όνομα επιχείρησης",
        type: "text",
        placeholder: "",
      },
      {
        name: "existingWebsite",
        label: "Έχεις ήδη ιστοσελίδα;",
        type: "select",
        options: [
          { label: "Όχι", value: "no" },
          { label: "Ναι", value: "yes" },
        ],
      },
      {
        name: "needs",
        label: "Τι χρειάζεσαι;",
        type: "textarea",
        placeholder:
          "Μια σύντομη περιγραφή του τι κάνει η επιχείρησή σου. Αν ήδη έχεις ιστοσελίδα ή μέσα κοινωνικής δικτύωσης για την επιχείρησή σου (Instagram ή Facebook).",
      },
    ],
    ctaLabel: "Αποστολή",
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
