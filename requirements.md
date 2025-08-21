You are a senior React developer and SEO expert. Build me a single-page React website that lists 25 popular online tools (like ilovepdf, calculator.net, JSON converter, image compressor, etc.).

Requirements:
1. Framework & Styling:
   - Use React with Tailwind CSS and shadcn/ui components.
   - Responsive design (mobile-first).
   - Elegant, modern, and minimal UI with soft shadows, rounded corners, grid-based layout.
   - Include subtle animations with Framer Motion.

2. Layout:
   - A clean header with site logo/name (“Online Tools Hub”) and a short tagline.
   - Search bar at the top to quickly filter tools.
   - Tools displayed in a responsive grid (card layout).
   - Each tool card includes: tool name, short description, category (e.g., PDF, Images, Text, Calculators), and an external link button (opens tool in a new tab).
   - Sticky footer with copyright.

3. SEO Optimizations:
   - Semantic HTML (header, main, footer, nav).
   - Proper meta tags (title, description, OG tags).
   - Schema markup for a directory/listing.
   - Lazy load images.
   - Fast Lighthouse performance.

4. Monetization:
   - Insert placeholders for Google AdSense / banner ads (one in header, one in sidebar, one inline after every 8 cards).
   - Responsive ad slots.

5. Tools Data:
   - Store the list of 25 tools in a `tools.json` file (name, description, category, link, optional icon).
   - Dynamically render cards from this JSON.

6. Bonus:
   - Dark mode toggle.
   - Smooth scroll and hover effects.
   - Simple analytics (placeholder for Google Analytics script).

Deliver a complete production-ready React codebase with clean, reusable components (Header, Footer, ToolCard, ToolGrid, SearchBar, AdBanner). Ensure it is elegant, simple, and visually appealing.