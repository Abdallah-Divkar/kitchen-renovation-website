"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitQuote } from "@/app/contact/actions";
import Button from "@/components/ui/Button";
import { ChevronDownIcon } from "@/components/ui/Icons";
import { cityOptions, productOptions } from "@/lib/quote";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const initialState = { status: "idle", values: {}, errors: {} };

const control =
  "bg-surface text-ink placeholder:text-muted w-full rounded-button border px-4 py-3 text-base transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// Label, control and error message, wired together for screen readers.
function Field({ name, label, required, error, className, children }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={`quote-${name}`} className="text-ink text-sm">
        {label}
        {required && (
          <span aria-hidden="true" className="text-primary">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p id={`quote-${name}-error`} className="text-danger text-sm">
          {error}
        </p>
      )}
    </div>
  );
}

// Props every control shares: id, name, error state and the link to its message.
function controlProps(name, state) {
  const error = state.errors?.[name];
  return {
    id: `quote-${name}`,
    name,
    defaultValue: state.values?.[name] ?? "",
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `quote-${name}-error` : undefined,
    className: cn(control, error ? "border-danger" : "border-line"),
  };
}

function Select({ name, state, placeholder, options, required }) {
  return (
    <div className="relative">
      <select
        // The key resets the choice to the returned value after each submit.
        key={state.values?.[name] ?? ""}
        {...controlProps(name, state)}
        required={required}

        className={cn(
          controlProps(name, state).className,
          "appearance-none pr-11",
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="text-muted pointer-events-none absolute top-1/2 right-4 size-4.5 -translate-y-1/2" />
    </div>
  );
}

export default function QuoteForm() {
  const [state, formAction, pending] = useActionState(
    submitQuote,
    initialState,
  );
  const formRef = useRef(null);
  const successRef = useRef(null);

  // After a submit: move focus to the first field with a problem, or to the thank-you message.
  useEffect(() => {
    if (state.status === "error") {
      const firstInvalid = formRef.current?.querySelector(
        '[aria-invalid="true"]',
      );
      firstInvalid?.focus();
    }
    if (state.status === "success") successRef.current?.focus();
  }, [state]);

  const card = "rounded-card border-line bg-raised border p-6 md:p-10";

  if (state.status === "success") {
    return (
      <div className={card}>
        <h2
          ref={successRef}
          tabIndex={-1}
          className="text-ink text-3xl font-semibold focus:outline-none"
        >
          Thank you{state.firstName ? `, ${state.firstName}` : ""}!
        </h2>
        <p className="text-muted mt-3 leading-relaxed">
          We’ve received your request and will get back to you within 1 business
          day. In the meantime, you’re welcome to visit the showroom:{" "}
          {site.visitNote.toLowerCase()}.
        </p>
      </div>
    );
  }

  return (
    <div className={card}>
      <h2 className="text-ink text-3xl font-semibold">
        Tell us about your project
      </h2>
      <p className="text-muted mt-2 text-sm">
        Fields marked <span className="text-primary">*</span> are required.
      </p>

      <form
        ref={formRef}
        action={formAction}
        // Our own messages replace the browser's pop-ups, so they look and read the same everywhere.
        noValidate
        className="mt-7 grid gap-5 sm:grid-cols-2"
      >
        {state.status === "error" && state.message && (
          <p
            role="alert"
            className="border-danger text-danger rounded-button border px-4 py-3 text-sm sm:col-span-2"
          >
            {state.message}
          </p>
        )}

        <Field
          name="fullName"
          label="Full name"
          required
          error={state.errors?.fullName}
        >
          <input
            {...controlProps("fullName", state)}
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </Field>

        <Field name="phone" label="Phone" required error={state.errors?.phone}>
          <input
            {...controlProps("phone", state)}
            type="tel"
            autoComplete="tel"
            placeholder="(647) 000-0000"
            required
          />
        </Field>

        <Field name="email" label="Email" required error={state.errors?.email}>
          <input
            {...controlProps("email", state)}
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            required
          />
        </Field>

        <Field name="city" label="City" error={state.errors?.city}>
          <Select
            name="city"
            state={state}
            placeholder="Select your city"
            options={cityOptions}
          />
        </Field>

        <Field
          name="product"
          label="Product you’re interested in"
          required
          error={state.errors?.product}
          className="sm:col-span-2"
        >
          <Select
            name="product"
            state={state}
            placeholder="Select a product"
            options={productOptions}
            required
          />
        </Field>

        <Field
          name="details"
          label="Project details"
          error={state.errors?.details}
          className="sm:col-span-2"
        >
          <textarea
            {...controlProps("details", state)}
            rows={5}
            maxLength={2000}
            placeholder="Tell us about your space, timeline and budget…"
            className={cn(controlProps("details", state).className, "resize-y")}
          />
        </Field>

        {/* Spam trap: hidden from people and screen readers, but bots fill it in. */}
        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label htmlFor="quote-company">Company</label>
          <input
            id="quote-company"
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={pending}
            className="w-full px-7! py-3.5! text-[15px]! sm:w-auto"
          >
            {pending ? "Sending…" : "Send Request"}
          </Button>
        </div>
      </form>
    </div>
  );
}
