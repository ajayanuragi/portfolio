# Personal portfolio

Next.js App Router, TypeScript, and Tailwind CSS. The homepage and SEO routes are pre-rendered at build time; no database or paid service is required.

## Local development

Run commands from this directory:

```sh
bun install --frozen-lockfile
bun run dev
```

Open http://localhost:3000. Run `bun run build` to check the production build and `bun run start` to serve it.

## Deploy to Vercel Hobby

1. Push this repository to GitHub and import it into Vercel under your Hobby account.
2. Leave **Root Directory** set to the repository root (the directory containing package.json).
3. Use the **Next.js** framework preset. Install command: `bun install --frozen-lockfile`. Build command: `bun run build`. Leave the output directory at the framework default.
4. Optionally set `SITE_URL` to your final public origin, such as `https://your-name.vercel.app`. If omitted, the app uses Vercel's production domain. For a custom domain, set `SITE_URL` explicitly. Redeploy after changing it.
5. Deploy. Check `/`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image` on the production domain.

Hobby is intended for personal, non-commercial projects and has usage limits: https://vercel.com/docs/plans/hobby. This project does not require a paid plan, but hosting remains subject to those limits.

## Before sharing

- Edit `src/lib/site.ts` with your name, title, and a specific description of your work.
- Replace the introductory content and coming-soon projects section in `src/app/page.tsx` with your real bio, projects, and contact links. No experience or projects have been invented.
- Replace the starter `src/app/favicon.ico` with your own icon.
- Metadata, canonical URL, social preview image, robots.txt, and sitemap are included. Local development and Vercel preview deployments discourage indexing; production allows indexing.
- Add each new public page to `src/app/sitemap.ts` and give it a unique title, description, and canonical URL.
- Submit the production `/sitemap.xml` in Google Search Console after launch. These foundations make the site crawlable; useful content and external links still matter for ranking.

Keep the main content in Server Components so it is present in the initial HTML. Add client components only where interactions need them. No static-export configuration is needed for Vercel.
