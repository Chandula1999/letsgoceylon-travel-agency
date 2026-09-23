---
name: responsive-design
description: >
  Global skill for making the Antigravity Next.js website fully responsive
  across mobile, tablet, and laptop/desktop screen sizes. Apply these rules
  whenever creating or editing any page, layout, or component. Covers
  Tailwind breakpoints, mobile-first layout patterns, responsive typography,
  images, navigation, and a pre-ship checklist.
---

# Antigravity — Responsive Design Skill

This document defines how every page, layout, and component in the
Antigravity Next.js codebase must behave across mobile, tablet, and laptop /
desktop screens. Treat every rule here as a hard constraint unless the user
explicitly overrides it for a specific task. Pairs with the
`antigravity-nextjs` global skill — follow both together.

---

## 1. Breakpoint System

Use Tailwind's default breakpoints. Do not invent custom breakpoint names;
extend `tailwind.config.ts` only if a real device gap shows up in testing.

| Prefix | Min width | Maps to           |
| ------ | --------- | ------------------ |
| (none) | 0px       | Mobile (base)       |
| `sm`   | 640px     | Large phone / small tablet |
| `md`   | 768px     | Tablet (portrait)   |
| `lg`   | 1024px    | Tablet (landscape) / small laptop |
| `xl`   | 1280px    | Laptop / desktop    |
| `2xl`  | 1536px    | Large desktop       |

**Rule of thumb for this project:**
- Mobile → base classes (no prefix)
- Tablet → `md:`
- Laptop/desktop → `lg:` and `xl:`

---

## 2. Mobile-First Is Mandatory

- Always write the **unprefixed** class for the smallest (mobile) layout
  first, then layer `md:` / `lg:` / `xl:` on top to scale up. Never design
  desktop-first and shrink down with max-width overrides.
- Never use `sm:hidden` / `md:hidden` as the primary way to build two
  separate layouts. Prefer one fluid layout that reflows, and only hide/show
  elements (e.g. a hamburger vs. full nav) when the content genuinely
  differs between breakpoints.

```tsx
// ✅ Mobile-first: stacked on mobile, 3-column grid from tablet up
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

// ❌ Desktop-first / fighting the cascade
<div className="grid grid-cols-3 max-md:grid-cols-1">
```

---

## 3. Layout Patterns

### Containers
- Wrap page content in a shared `Container` component, not repeated
  `max-w-*` classes per page.

```tsx
// components/ui/Container.tsx
export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
```

### Grids & Flex
- Use CSS Grid (`grid-cols-*`) for card/gallery layouts, Flexbox for
  one-dimensional rows (nav bars, button groups, toolbars).
- Never hard-code pixel widths on a layout element. Use `w-full`,
  `max-w-*`, `flex-1`, or grid fractions instead.
- Gaps and padding should scale with breakpoint: smaller on mobile, larger
  on laptop (e.g. `gap-4 md:gap-6 lg:gap-8`).

### Stacking Order
- On mobile, primary content and CTAs come before secondary content
  (sidebars, filters, related items). Use `order-*` utilities or DOM order
  rather than `flex-row-reverse` hacks when the visual order must differ
  from source order for accessibility reasons.

---

## 4. Responsive Typography

- Use a fluid type scale via Tailwind responsive prefixes rather than one
  fixed size everywhere.

```tsx
<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
<p className="text-sm md:text-base lg:text-lg">
```

- Line length matters: constrain long-form text with `max-w-prose` (or
  `max-w-[65ch]`) so lines don't stretch edge-to-edge on laptop screens.
- Never rely on the browser's default zoom/shrink behavior to "make it fit" —
  set explicit sizes per breakpoint.

---

## 5. Navigation

- Build **one** `Header`/`Nav` component with two states, not two separate
  components:
  - **Mobile/tablet (`< lg`)**: collapsed nav behind a hamburger/drawer
    (Client Component, `"use client"`, local `useState` for open/close).
  - **Laptop/desktop (`lg:` and up)**: full horizontal nav, dropdowns on
    hover/focus instead of a drawer.

```tsx
"use client";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="hidden items-center gap-6 lg:flex">{/* full nav links */}</nav>
      <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {/* hamburger icon */}
      </button>
      {open && <MobileDrawer onClose={() => setOpen(false)} />}
    </nav>
  );
}
```

- Touch targets in mobile nav must be at least **44×44px**.
- The mobile drawer must trap focus and close on `Escape` for accessibility.

---

## 6. Images & Media

- Always use `next/image` with `sizes` set correctly for responsive layouts
  so the browser doesn't download a desktop-sized image on mobile:

```tsx
<Image
  src={photo.url}
  alt={photo.alt}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

- Art-direct when the crop should genuinely differ by device (e.g. a tall
  hero crop on mobile vs. a wide crop on laptop) using two `next/image`
  instances toggled with `hidden md:block` / `md:hidden` — do this only for
  hero/banner imagery, not routine content images.
- Never use a fixed pixel `width`/`height` that forces a fixed-size image
  inside a fluid container; use `fill` with a relatively-positioned,
  aspect-ratio-controlled parent (`aspect-video`, `aspect-[4/3]`, etc.)
  instead.
- Embeds (maps, videos) must sit in an aspect-ratio wrapper (`aspect-video`)
  so they scale instead of overflowing on small screens.

---

## 7. Forms & Interactive Elements

- Inputs and buttons must be full-width (`w-full`) on mobile and constrained
  (`md:w-auto` / `md:max-w-sm`) on tablet/laptop where appropriate — never
  a fixed narrow width that's hard to tap on mobile.
- Multi-column forms on laptop (`lg:grid-cols-2`) should collapse to a
  single column on mobile (`grid-cols-1`).
- Minimum tap target: 44×44px for any button, checkbox, radio, or icon
  button, at every breakpoint.

---

## 8. Tables & Data-Heavy Content

- Wide tables must scroll horizontally on mobile/tablet inside a contained
  wrapper, not overflow the page:

```tsx
<div className="w-full overflow-x-auto">
  <table className="min-w-[640px]">...</table>
</div>
```

- Consider a card-based layout on mobile (`md:hidden` cards +
  `hidden md:table` table) for data that's unreadable as a horizontally
  scrolled table — e.g. pricing/fleet comparison tables.

---

## 9. Testing Checklist

Before finishing any page or component, verify at minimum these three
viewport widths (use browser dev tools device toolbar or resize the
window):

| Device class     | Reference width |
| ----------------- | ---------------- |
| Mobile             | 375px            |
| Tablet             | 768px            |
| Laptop/Desktop      | 1280px           |

- [ ] No horizontal scrollbar appears at any of the three widths
- [ ] No text is clipped, overlapping, or overflowing its container
- [ ] Nav collapses to a drawer/hamburger below `lg`, full nav from `lg` up
- [ ] Images scale and crop correctly, no layout shift (`CLS`) on load
- [ ] Tap targets are ≥44×44px on mobile/tablet
- [ ] Grids reflow: 1 column mobile → 2 tablet → 3+ laptop (adjust per
      design, but never fewer columns on a wider screen than a narrower one)
- [ ] Forms are usable one-handed on mobile (full-width inputs, no
      side-by-side fields)
- [ ] Long-form text is constrained to a readable line length on laptop
- [ ] Fixed/sticky elements (headers, CTAs) don't cover content or overflow
      the viewport on short mobile screens
- [ ] Tested in both portrait and landscape on tablet where the page has
      orientation-sensitive layout (galleries, tables, maps)

---

## 10. Anti-Patterns to Avoid

- ❌ Fixed pixel widths/heights on layout containers (`w-[960px]`)
- ❌ `!important` or arbitrary `max-md:` overrides to patch a desktop-first
  layout instead of rewriting it mobile-first
- ❌ Two entirely separate page components for "mobile" vs. "desktop"
  versions of the same route
- ❌ Disabling pinch-zoom or setting `user-scalable=no` in the viewport meta
- ❌ Relying on `window.innerWidth` in a `useEffect` to conditionally render
  layout — use CSS breakpoints; reserve JS-based checks for behavior that
  truly can't be done in CSS (e.g. swapping a heavy component)
