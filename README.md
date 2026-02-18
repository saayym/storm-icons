# @storm-ds/icons

486 clean, consistent SVG icons as React components. Designed for the Storm design system.

[Browse icons](https://storm-project-web.vercel.app/docs/icons)

## Installation

```bash
npm install @storm-ds/icons
# or
pnpm add @storm-ds/icons
```

### Peer dependencies

```bash
pnpm add react
```

## Usage

```tsx
import { ArrowRight, Search, Settings } from '@storm-ds/icons'

export default function App() {
  return (
    <button>
      Next <ArrowRight />
    </button>
  )
}
```

Each icon accepts standard SVG props (`className`, `width`, `height`, `stroke`, etc.):

```tsx
<Search className="w-5 h-5 text-storm-muted-foreground" />
```

### Metadata

Access icon names and categories for building icon pickers or documentation:

```tsx
import { iconMetadata } from '@storm-ds/icons/metadata'
import type { IconName, IconCategory } from '@storm-ds/icons/metadata'
```

14 categories: Arrows & Navigation, Actions, Media, Communication, Files & Folders, Layout & UI, Shapes & Symbols, Commerce, Users & Social, Development, Weather & Nature, Charts & Data, Security, Misc.

### Raw SVGs

SVG files are also available directly:

```js
import icon from '@storm-ds/icons/svg/arrow-right.svg'
```

## Exports

| Entry point | Description |
|---|---|
| `@storm-ds/icons` | 486 React icon components |
| `@storm-ds/icons/metadata` | Icon names, categories, and tags |
| `@storm-ds/icons/svg/*` | Raw SVG files |

## Requirements

- React >= 18

## License

MIT
