import { cities } from "@/data/cities";
import { products } from "@/data/products";

// Shared by the form (dropdown options) and the server (checking the answers),
// so both always agree on what's allowed.
export const cityOptions = [...cities.map((city) => city.name), "Other"];
export const productOptions = [
  ...products.map((product) => product.name),
  "Not sure yet",
];

const LIMITS = { fullName: 100, email: 200, details: 2000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Checks a quote request. Returns the cleaned-up values and an errors object
 * ({ fieldName: "message" }); an empty errors object means everything is fine.
 */
export function validateQuote(input) {
  const values = {
    fullName: input.fullName.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    city: input.city.trim(),
    product: input.product.trim(),
    details: input.details.trim(),
  };
  const errors = {};

  if (!values.fullName) errors.fullName = "Please enter your name.";
  else if (values.fullName.length > LIMITS.fullName)
    errors.fullName = "Please shorten your name.";

  // Count digits only, so "(647) 642-7751" and "647.642.7751" both work.
  const digits = values.phone.replace(/\D/g, "");
  if (!values.phone) errors.phone = "Please enter your phone number.";
  else if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a full phone number, e.g. (647) 000-0000.";

  if (!values.email) errors.email = "Please enter your email address.";
  else if (
    values.email.length > LIMITS.email ||
    !EMAIL_PATTERN.test(values.email)
  )
    errors.email = "Please enter a valid email, e.g. you@email.com.";

  if (values.city && !cityOptions.includes(values.city))
    errors.city = "Please choose a city from the list.";

  if (!values.product) errors.product = "Please choose a product.";
  else if (!productOptions.includes(values.product))
    errors.product = "Please choose a product from the list.";

  if (values.details.length > LIMITS.details)
    errors.details = `Please keep this under ${LIMITS.details} characters.`;

  return { values, errors };
}
