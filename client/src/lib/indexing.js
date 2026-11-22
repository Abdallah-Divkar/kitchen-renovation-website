// Search engines stay away until launch. To launch, add the environment variable
// ALLOW_INDEXING=true on Vercel (Settings → Environment Variables) and redeploy.
export const allowIndexing = process.env.ALLOW_INDEXING === "true";
