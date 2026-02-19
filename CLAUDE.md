# CLAUDE.md — storm-icons

## Icon Design Language

All icons in this library follow a strict geometric, stroke-based style. Consistency is paramount.

### SVG Template

Every icon must use this exact `<svg>` wrapper:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <!-- elements here -->
</svg>
```

### Mandatory Attributes

| Attribute | Value | Reason |
|---|---|---|
| `width` / `height` | `24` | Standard icon grid |
| `viewBox` | `0 0 24 24` | 24×24 coordinate space |
| `fill` | `none` | Stroke-only icons, no fills |
| `stroke` | `currentColor` | Inherits color from parent CSS |
| `stroke-width` | `1.5` | Consistent line weight |
| `stroke-linecap` | `round` | Smooth, rounded line caps |
| `stroke-linejoin` | `round` | Smooth corner joins |

### Allowed SVG Primitives

Only these elements are permitted inside `<svg>`:

- `<line>` — straight line segments
- `<polyline>` — connected line segments (open)
- `<polygon>` — connected line segments (closed)
- `<path>` — complex shapes using d attribute
- `<circle>` — circles
- `<rect>` — rectangles

### Forbidden Elements & Techniques

- No `<g>` groups (keep flat structure)
- No `<defs>`, `<clipPath>`, `<mask>`, `<use>`
- No `<linearGradient>`, `<radialGradient>`
- No `<filter>`, `<feDropShadow>`, or any filter effects
- No `<text>`, `<tspan>`, `<textPath>`
- No `fill` on any child element (everything is stroked)
- No inline `style` attributes
- No `class` or `id` attributes on child elements
- No `transform` attributes (position with coordinates instead)

### Design Guidelines

- **Optical padding**: Keep strokes within the ~2–22 coordinate range for consistent visual weight
- **Simplicity**: Use the minimum number of elements to convey the concept
- **Geometric**: Prefer straight lines, clean arcs, and whole/half coordinates
- **Recognizable at 16px**: Icons must be identifiable when rendered small
- **No decorative detail**: Every stroke must be functional for recognition

### File Naming

- Kebab-case: `my-icon-name.svg`
- Descriptive, concise names
- Use existing naming patterns (e.g., `file-*` for file variants, `cloud-*` for cloud variants)

## Adding a New Icon

1. Create the SVG file in `svg/` following the template above
2. Add an entry in `metadata.json` under `icons` with `category` and `tags` (3–5 tags)
3. If the category is new, add it to the `categories` array in `metadata.json`
4. Run `pnpm build` (runs `node build.js && tsup`)
5. Verify the generated component in `src/` has correct attributes

## Build Process

```bash
pnpm build          # Full build: generate React components + bundle
node build.js       # Generate src/*.tsx + src/index.ts + src/metadata.ts only
```

`build.js` reads SVGs from `svg/`, generates `forwardRef` React components in `src/`, and creates barrel exports + metadata types. `tsup` then bundles everything to `dist/`.

## Categories

Categories are defined in `metadata.json`. Each icon belongs to exactly one category. Current categories:

Arrows & Navigation, Actions, Layout & UI, Files & Folders, Communication, Media, Shapes & Symbols, Users & Social, Commerce, Security, Development, Weather & Nature, Charts & Data, Misc
