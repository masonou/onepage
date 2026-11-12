"use client";

import type { FormEvent } from "react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { sectionIds, siteConfig } from "../../lib/site";
import type { ContactContent, FormField } from "../../types/content";

type ContactProps = {
  content: ContactContent;
};

function renderField(field: FormField, selectPlaceholder: string) {
  const fieldClasses =
    "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-4 focus:ring-[rgba(21,90,201,0.12)]";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.name}
        name={field.name}
        rows={5}
        placeholder={field.placeholder}
        required={field.required}
        className={fieldClasses}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select id={field.name} name={field.name} className={fieldClasses} defaultValue="">
        <option value="" disabled>
          {selectPlaceholder}
        </option>
        {field.options?.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={option.preferred ? "font-semibold" : undefined}
          >
            {option.label}
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
      required={field.required}
      className={fieldClasses}
    />
  );
}

export function Contact({ content }: ContactProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = content.formFields
      .map((field) => {
        const value = formData.get(field.name);
        return value ? `${field.label}: ${value}` : null;
      })
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?${new URLSearchParams({
      subject: content.emailSubject,
      body: message,
    }).toString()}`;
  };

  return (
    <Section
      id={sectionIds.contact}
      title={content.title}
    >
      <div className="max-w-3xl">
        <WhatsAppButton
          label={content.whatsappCtaLabel}
          message={content.whatsappMessage}
        />

        <div className="my-8 flex items-center gap-4" aria-hidden="true">
          <span className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted">{content.formDividerLabel}</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <Card className="p-8 sm:p-10" tone="soft">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              {content.formFields.slice(0, 6).map((field) => (
                <label key={field.name} htmlFor={field.name}>
                  <span className="text-sm font-semibold text-foreground">
                    {field.label}
                    {field.required && (
                      <span className="ml-1 text-accent" aria-hidden="true">
                        *
                      </span>
                    )}
                  </span>
                  {renderField(field, content.selectPlaceholder)}
                </label>
              ))}
            </div>

            {content.formFields.slice(6).map((field) => (
              <label key={field.name} htmlFor={field.name}>
                <span className="text-sm font-semibold text-foreground">
                  {field.label}
                  {field.required && (
                    <span className="ml-1 text-accent" aria-hidden="true">
                      *
                    </span>
                  )}
                </span>
                {renderField(field, content.selectPlaceholder)}
              </label>
            ))}

            <div className="pt-2">
              <Button type="submit">{content.ctaLabel ?? "Αποστολή"}</Button>
            </div>

          </form>
        </Card>
      </div>
    </Section>
  );
}
