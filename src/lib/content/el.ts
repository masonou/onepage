import { sectionIds, siteConfig } from "../site";
import type { SiteContent } from "../../types/content";

export const elContent: SiteContent = {
  locale: "el",
  metadata: {
    title: "Ιστοσελίδες για Μικρές Επιχειρήσεις στην Κύπρο | One Page Cyprus",
    description:
      "Μοντέρνες, προσιτές και φιλικές για κινητά ιστοσελίδες για μικρές επιχειρήσεις και ελεύθερους επαγγελματίες στην Κύπρο. Από €850.",
  },
  header: {
    brand: siteConfig.name,
    homeHref: "/",
    navigation: [
      { label: "Διαδικασία", href: `#${sectionIds.process}` },
      { label: "Τιμή", href: `#${sectionIds.packages}` },
      { label: "Παράδειγμα", href: `#${sectionIds.examples}` },
    ],
    cta: { label: "Επικοινώνησε", href: `#${sectionIds.contact}` },
    localeSwitch: {
      label: "English",
      href: "/en",
      ariaLabel: "Αλλαγή γλώσσας σε Αγγλικά",
    },
  },
  hero: {
    title: "Θέλεις Ιστοσελίδα αλλά ούλλοι κόφκουν κελλέ; Δαμέ είσαι!",
    description: "Μοντέρνες Ιστοσελίδες | Ξεκάθαρη Διαδικασία | Φιλική Τιμή",
    primaryCta: { label: "Επικοινώνησε", href: `#${sectionIds.contact}` },
    secondaryCta: { label: "Πόσα", href: `#${sectionIds.packages}` },
    trustNote:
      "Για μικρές επιχειρήσεις και ελεύθερους επαγγελματίες που χρειάζονται εμφάνιση στο διαδίκτυο χωρίς να πιερώσουν τα μανοτζέφαλα τους.",
  },
  problem: {
    title: "Γιατί σου ζητούν €5,000 για μιαν απλή ιστοσελίδα;",
    paragraphs: [
      { text: "1. Εν ξέρεις τι θέλεις", tone: "strong" },
      {
        text: "Ένεν η δουλεία σου να ξέρεις πως πρέπει να σχεδιαστεί μια ιστοσελίδα τζαι τι να γραφτεί μέσα. Αλλά επειδή εν ξέρεις, οι προγραμματιστές τζαι σχεδιαστές ενα πρέπει να φαν τις ώρες τους να κάμνουν και να ξανα-κάμνουν τι σελίδα σου ώσπου να κουτσίσουν κάτι που σου αρέσκει.",
      },
      { text: "2. Ρωτάς σε λάθος τόπους", tone: "strong" },
      {
        text: "Ρωτάς σε μεγάλες εταιρείες που κάμνουν ιστοσελίδες και εφαρμογές για μεγιστάνες. Δουλειές που κοστίζουν δεκάδες σσιλίαες τζαι χρειάζουντε μεγάλες ομάδες. Μόνο τζαι μόνο για να σχοληθούν ενα πρέπει να σσιονόσσεις λεφτά.",
      },
      { text: "3. Ζητάς πράματα που εν πολύπλοκα", tone: "strong" },
      {
        text: "Πράματα που ακούονται τζαι φαίνουνται ωραία, αλλά στην πραγματικότητα εν τα χρειάζεσαι.",
      },
    ],
    needsTitle: "Τι χρειάζεσαι πραγματικά",
    needs: [
      "Επαγγελματική πρώτη εντύπωση που μιλά στους πιθανούς σου πελάτες",
      "Ξεκάθαρες πληροφορίες για το τι προσφέρεις",
      "Ενά τρόπο να επικοινωνήσουν μαζί σου εύκολα",
      "Κάτι εμφανίσιμο που μπόρεις να διαφημίσεις στο βανούι σου, αλλά τζαι στο ίνσταγκραμ",
    ],
  },
  packages: {
    title: "Ναι αλλά.. Πόσα;",
    description: "",
    includesLabel: "Includes",
    packages: [
      {
        name: "Βασικό Πακέτο με ότι Χρειάζεσαι",
        price: "€850",
        bestFor:
          "Ιδανικό για μικρομεσαίες επιχειρήσεις και ελεύθερους επαγγελματίες",
        description: "",
        includes: [
          "Συμβουλή για το τι να κάμουμε",
          "Μαξ 2 σελίδες",
          "Μοντέρνο design",
          "Παρουσιάσιμη σε τηλέφωνα, τάμπλετ και κομπιούτερ",
          "Μια γλώσσα (Αγγλικά)",
          "Ξεκάθαρες πληροφορίες για τη δουλειά σου",
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
          "Επιπλέον σελίδες",
          "Φόρμα επικοινωνίας",
          "Επιπλέον αναθεωρήσεις/αλλαγές",
          "Γκαλερί φωτογραφιών",
          "Αναλυτικά στοιχεία / αναφορές για να ξέρεις ποιοί επισκέπτονται τη σελίδα σου",
          "Επιπλέον γλώσσες (πιθανότητα για Ελληνικά, Ρωσικά, Ισπανικά)",
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
      "Ούλλη διαδικασία παίρνει περίπου 1-2 εβδομάδες. Καθ' όλη τη διάρκεια θα είμαστε σε επικοινωνία.",
    steps: [
      {
        title: "Καταλάβω τις ανάγκες σου",
        description:
          "Επικοινωνούμε για να καταλάβω τι κάμνεις, τι χρειάζεσαι, ποιοί εν οι πελάτες σου, τζαι αν κάμνει να δουλέψουμε μαζί.",
      },
      {
        title: "Στέλνεις μου τα βασικά",
        description:
          "Λογότυπο, φωτογραφίες, διαδικασίες, και γενικά ότι έσσεις.",
      },
      {
        title: "Χτίζω τη σελίδα",
        description:
          "Δημιουργώ την ιστοσελίδα βάση των αναγκών σου και κάμνουμε αλλαγές που θέλεις.",
      },
      {
        title: "Πληρωμή και Πάμεν Online",
        description:
          "Βρίσκουμε το όνομα που θέλεις (π.χ. onepage.com.cy), πληρώνεις με, και πάμεν online.",
      },
    ],
  },
  examples: {
    title: "Πως μπορεί να είναι η ιστοσελίδα σου",
    project: {
      featuredLabel: "ΠΑΡΑΔΕΙΓΜΑ",
      name: "LVG Blinds",
      description:
        "Ιστοσελίδα για εταιρεία που παρέχει λύσεις για εσωτερική και εξωτερική σκίαση.",
      highlights: [
        "Ξεκάθαρη παρουσίαση των υπηρεσιών",
        "Εμφάνιση των προϊόντων με φωτογραφίες",
        "Εύκολοι τρόποι επικοινωνίας",
      ],
      ctaLabel: "Δε την",
      website: "https://www.lvgblinds.com",
      desktopImage: "/images/lvg-blinds-desktop.jpg",
      desktopImageAlt: "Η ιστοσελίδα της LVG Blinds σε υπολογιστή",
      mobileImage: "/images/lvg-blinds-mobile.jpg",
      mobileImageAlt: "Η ιστοσελίδα της LVG Blinds σε κινητό",
    },
  },
  whyUs: {
    title: "Γιατί να δουλέψεις μαζί μου",
    description: `Χαίρετε, είμαι ο Κυριάκος και χτίζω ιστοσελίδες τα τελευταία 7 χρόνια παράλληλα με τη δουλειά μου. Η κύρια μου καριέρα είναι στην ανάπτυξη επιχειρήσεων, προγραμμάτων και έργων. 

Ο στόχος μου με μιαν ιστοσελίδα είναι να δημιουργώ επαγγελματική παρουσία μιας επιχείρησης, που ταιρκάζει με το ύφος της, τζαι κάμνει τους επισκέπτες να γίνουντε πελάτες.

Πε μου τι σκέφτεσαι!`,

    image: "/images/masonou.jpeg",
    imageAlt: "Kyriakos Masonou",
    linkedInLabel: "LinkedIn του Κυριάκου Masonou",
    instagramLabel: "Instagram του Κυριάκου Masonou",
  },
  contact: {
    title: "Πε μου τι θέλεις",
    whatsappCtaLabel: "Στείλε μου στο WhatsApp",
    whatsappMessage:
      "Γεια σου Κυριάκο! Ενδιαφέρομαι να κάνω ιστοσελίδα για την επιχείρησή μου.",
    formDividerLabel: "ή",
    selectPlaceholder: "Select an option",
    emailSubject: `${siteConfig.name} contact request`,
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
          "Μια σύντομη περιγραφή του τι κάνει η επιχείρησή σου. Αν ήδη έχεις ιστοσελίδα ή μέσα κοινωνικής δικτύωσης για την επιχείρησή σου (Instagram ή Facebook) στείλε μου τα εδώ.",
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
