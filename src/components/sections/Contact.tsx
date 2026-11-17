"use client";

import { useState } from "react";

import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { WhatsAppButton } from "../ui/WhatsAppButton";
import { sectionIds } from "../../lib/site";
import type { ContactContent, FormField } from "../../types/content";

type ContactProps = {
  content: ContactContent;
};

type FieldErrors = Record<string, string>;

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <span
      id={id}
      role="alert"
      className="mt-2 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium leading-6 text-red-800"
    >
      <span
        aria-hidden="true"
        className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white"
      >
        !
      </span>
      {message}
    </span>
  );
}

function renderField(
  field: FormField,
  selectPlaceholder: string,
  error: string | undefined,
  onFieldInvalid: (field: FormField, validity: ValidityState) => void,
  onFieldInput: (name: string) => void,
) {
  const fieldClasses =
    "mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-foreground outline-none";
  const validationClasses = error
    ? "border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100"
    : "border-border focus:border-accent focus:ring-4 focus:ring-[rgba(21,90,201,0.12)]";
  const accessibilityProps = {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${field.name}-error` : undefined,
  };

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.name}
        name={field.name}
        rows={5}
        placeholder={field.placeholder}
        required={field.required}
        onInvalid={(event) => {
          event.preventDefault();
          onFieldInvalid(field, event.currentTarget.validity);
        }}
        onInput={() => onFieldInput(field.name)}
        className={`${fieldClasses} ${validationClasses}`}
        {...accessibilityProps}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select
        id={field.name}
        name={field.name}
        defaultValue=""
        onInvalid={(event) => {
          event.preventDefault();
          onFieldInvalid(field, event.currentTarget.validity);
        }}
        onInput={() => onFieldInput(field.name)}
        className={`${fieldClasses} ${validationClasses}`}
        {...accessibilityProps}
      >
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
      onInvalid={(event) => {
        event.preventDefault();
        onFieldInvalid(field, event.currentTarget.validity);
      }}
      onInput={() => onFieldInput(field.name)}
      className={`${fieldClasses} ${validationClasses}`}
      {...accessibilityProps}
    />
  );
}

export function Contact({ content }: ContactProps) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const handleFieldInvalid = (field: FormField, validity: ValidityState) => {
    const message =
      field.type === "email" && validity.typeMismatch
        ? content.emailInvalidMessage
        : content.requiredFieldMessage;

    setErrors((current) => ({ ...current, [field.name]: message }));
  };
  const clearFieldError = (name: string) => {
    setErrors((current) => {
      if (!current[name]) return current;

      const remainingErrors = { ...current };
      delete remainingErrors[name];
      return remainingErrors;
    });
  };
  const renderFieldGroup = (field: FormField) => {
    const error = errors[field.name];

    return (
      <label key={field.name} htmlFor={field.name}>
        <span
          className={`text-sm font-semibold ${error ? "text-red-800" : "text-foreground"}`}
        >
          {field.label}
          {field.required && (
            <span className={`ml-1 ${error ? "text-red-600" : "text-accent"}`} aria-hidden="true">
              *
            </span>
          )}
        </span>
        {renderField(
          field,
          content.selectPlaceholder,
          error,
          handleFieldInvalid,
          clearFieldError,
        )}
        {error && <FieldError id={`${field.name}-error`} message={error} />}
      </label>
    );
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
          <form action="https://formspree.io/f/mrpqqzkb" method="POST" className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {content.formFields.slice(0, 6).map(renderFieldGroup)}
            </div>

            {content.formFields.slice(6).map(renderFieldGroup)}

            <div className="pt-2">
              <Button type="submit">{content.ctaLabel ?? "Αποστολή"}</Button>
            </div>

          </form>
        </Card>
      </div>
    </Section>
  );
}
