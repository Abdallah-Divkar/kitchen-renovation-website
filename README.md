# Kitchen Renovation Website

A website for a kitchen renovation business: custom kitchen cabinets, bathroom vanities, closets and wardrobes, and countertops, serving Toronto, Markham, Richmond Hill, Vaughan, and Scarborough. The project is split into a client-facing frontend and a separate server-side backend.

## Status

Frontend development comes first. The backend (`server/`) is intentionally empty for now and its stack has not been chosen.

## Tech Stack

| Part | Technology |
|---|---|
| Frontend (`client/`) | Next.js (App Router), React, JavaScript, Tailwind CSS |
| Backend (`server/`) | To be decided |
| Design | Figma wireframes (Option A: traditional nav bar, Option B: burger menu) |

## Project Structure

```
kitchen-renovation-website/
├── client/                     # Frontend application (Next.js)
│   ├── public/
│   │   └── images/             # Hero, products, materials, projects, logo
│   └── src/
│       ├── app/                # Routes (App Router)
│       │   ├── layout.js      # Header + footer wrapper
│       │   ├── page.js        # Home
│       │   ├── products/
│       │   ├── areas/
│       │   ├── projects/
│       │   ├── about/
│       │   └── contact/
│       ├── components/
│       │   ├── layout/         # Header, MobileMenu, Footer
│       │   ├── ui/             # Button, Card, SectionHeading
│       │   ├── home/           # Hero, Intro, FeaturedProjects, WhyChooseUs, QuoteBand
│       │   ├── products/       # ProductCard, MaterialCard
│       │   ├── areas/          # CityCard
│       │   ├── projects/       # FilterBar, ProjectGallery
│       │   ├── about/          # Stats, Values, Showroom
│       │   ├── contact/        # QuoteForm, ContactInfo, Map
│       │   └── shared/         # Components used on several pages (Testimonials)
│       ├── data/               # Site content: products, materials, cities, projects, testimonials, nav
│       └── lib/                # Utilities
├── server/                     # Backend application and API (not started)
├── .gitignore
└── README.md
```

### Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/products` | Products and "Materials We Use" |
| `/areas` | Areas We Serve (one card per city) |
| `/projects` | Project gallery with filters |
| `/about` | About |
| `/contact` | Quote request form, contact info, map |

Navigation links collapse into a hamburger menu below roughly 1024px.

### Content lives in `client/src/data/`

Product names, cities, projects, testimonials, and nav links are stored as data files rather than hard-coded in components. Product names are still placeholders pending client confirmation, so update them there.

## Prerequisites

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/) (current LTS) and npm
* [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/Abdallah-Divkar/kitchen-renovation-website.git
cd kitchen-renovation-website
```

### 2. Run the client

```
cd client
npm install
npm run dev
```

The site runs at [http://localhost:3000](http://localhost:3000).

Other useful commands, run from `client/`:

| Command | What it does |
|---|---|
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### 3. Run the server

The backend has not been set up yet. Setup instructions will be added here once its stack is chosen.

## Testing

Before pushing changes:

1. Run `npm run lint` and `npm run build` in `client/` and fix any errors.
2. Verify the client starts with `npm run dev`.
3. Check the pages you changed at desktop and mobile widths, including the hamburger menu below about 1024px.
4. Check the terminal and browser console for errors.

Once the server exists, also verify that it starts, its endpoints respond, and the client integrates with it.

## Development Guidelines

* Keep frontend code in `client/` and backend code in `server/`.
* Put site content (product names, cities, projects, and so on) in `client/src/data/`, not inside components.
* Never commit secrets, passwords, API keys, or private environment files.
* Document required environment variables in an `.env.example` file without real credentials.
* Use descriptive commit messages (for example `feat: add products page`).
* Test changes before pushing.

## Workflow

Both developers work in this repository directly using feature branches.

1. Pull the latest `main`:

   ```
   git switch main
   git pull
   ```

2. Create a feature branch:

   ```
   git switch -c feature/your-feature-name
   ```

3. Make and test your changes, then commit and push:

   ```
   git add .
   git commit -m "feat: describe your changes"
   git push -u origin feature/your-feature-name
   ```

4. Open a pull request into `main` on GitHub and have the other developer review it before merging.

## License

No license has been specified yet. Contact the repository owner before reusing or distributing this project's code.