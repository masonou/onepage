import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { sectionIds } from "../../lib/site";
import type { ContactContent, FormField } from "../../types/content";

type ContactProps = {
  content: ContactContent;
};

function renderField(field: FormField) {
  const fieldClasses =
    "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(21,90,201,0.12)]";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.name}
        name={field.name}
        rows={5}
        placeholder={field.placeholder}
        className={fieldClasses}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select id={field.name} name={field.name} className={fieldClasses} defaultValue="">
        <option value="" disabled>
          Select an option
        </option>
        {field.options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      id={field.name}
      name={field.name}
      type={field.type}
      placeholder={field.placeholder}
      className={fieldClasses}
    />
  );
}

export function Contact({ content }: ContactProps) {
  return (
    <Section
      id={sectionIds.contact}
      title={content.title}
      description={content.description}
    >
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
        <Card className="p-8 sm:p-10" tone="soft">
          <form className="space-y-5">
            {/* TODO: Add form submission handling here when the contact flow is connected. */}
            <div className="grid gap-5 sm:grid-cols-2">
              {content.formFields.slice(0, 6).map((field) => (
                <label key={field.name} htmlFor={field.name}>
                  <span className="text-sm font-semibold text-foreground">{field.label}</span>
                  {renderField(field)}
                </label>
              ))}
            </div>

            {content.formFields.slice(6).map((field) => (
              <label key={field.name} htmlFor={field.name}>
                <span className="text-sm font-semibold text-foreground">{field.label}</span>
                {renderField(field)}
              </label>
            ))}

            <div className="space-y-4 pt-2">
              <Button type="button">{content.ctaLabel}</Button>
              <p className="text-sm leading-7 text-muted">{content.formNote}</p>
            </div>
          </form>
        </Card>

        <Card className="p-8 sm:p-10" tone="plain">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            {content.detailsTitle}
          </p>
          <ul className="mt-6 space-y-4">
            {content.details.map((detail) => (
              <li
                key={detail}
                className="flex items-start gap-3 text-sm leading-7 text-foreground"
              >
                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
