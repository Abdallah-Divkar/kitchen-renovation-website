/**
 * Delivers a checked quote request.
 *
 * TODO (email): for now this only prints the request in the terminal where
 * `npm run dev` runs. The email step replaces the body of this function with a
 * call to Resend, sending to process.env.QUOTE_TO_EMAIL. Nothing else changes.
 */
export async function sendQuoteRequest(request) {
  console.log("\n📩 New quote request (not emailed yet):", request, "\n");
}
