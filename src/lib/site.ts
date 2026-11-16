// Public-facing portfolio identity. Contact details are intentionally omitted.
export const site = {
  name: "Ajay",
  title: "Ajay | Full-Stack & Backend Developer",
  description:
    "Ajay builds full-stack web apps and backend services using React, Java, Spring Boot, and REST APIs.",
};

const configuredUrl = process.env.SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const parsedUrl = new URL(configuredUrl);
if (!["http:", "https:"].includes(parsedUrl.protocol)) {
  throw new Error("SITE_URL must be an absolute HTTP or HTTPS URL.");
}
export const siteUrl = parsedUrl.origin;
export const isIndexable =
  parsedUrl.hostname !== "localhost" &&
  parsedUrl.hostname !== "127.0.0.1" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production");
