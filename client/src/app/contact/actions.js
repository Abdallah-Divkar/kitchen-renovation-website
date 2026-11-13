"use server";

import { validateQuote } from "@/lib/quote";
import { sendQuoteRequest } from "@/lib/sendQuoteRequest";

const FIELDS = ["fullName", "phone", "email", "city", "product", "details"];

// Runs on the server when the quote form is submitted. The browser can be
// bypassed, so every answer is checked again here.
export async function submitQuote(previousState, formData) {
  // Spam trap: "company" is hidden from people, but bots fill in every field.
  // Pretend it worked, so the bot doesn't learn anything.
  if (formData.get("company")) return { status: "success", firstName: "" };

  const input = Object.fromEntries(
    FIELDS.map((name) => [name, String(formData.get(name) ?? "")]),
  );
  const { values, errors } = validateQuote(input);

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      values,
      errors,
      message:
        Object.keys(errors).length === 1
          ? "Please fix the field marked below."
          : `Please fix the ${Object.keys(errors).length} fields marked below.`,
    };
  }

  try {
    await sendQuoteRequest(values);
  } catch (error) {
    console.error("Quote request failed:", error);
    return {
      status: "error",
      values,
      errors: {},
      message:
        "Sorry, your request couldn’t be sent. Please try again, or call us.",
    };
  }

  return { status: "success", firstName: values.fullName.split(" ")[0] };
}
