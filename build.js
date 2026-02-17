#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { optimize } = require('svgo')

const startTime = performance.now()

const svgDir = path.join(__dirname, 'svg')
const srcDir = path.join(__dirname, 'src')

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true })
}

const svgoConfig = {
  plugins: [
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeEditorsNSData',
    'cleanupAttrs',
    'mergeStyles',
    'minifyStyles',
    'removeUselessDefs',
    'cleanupNumericValues',
    'convertColors',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    {
      name: 'removeUselessStrokeAndFill',
      params: { removeNone: false },
    },
    'cleanupEnableBackground',
    'convertShapeToPath',
    'convertPathData',
    'convertTransform',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'removeUnusedNS',
    'sortAttrs',
    'sortDefsChildren',
    {
      name: 'removeAttrs',
      params: { attrs: ['xmlns', 'width', 'height', 'class'] },
    },
  ],
}

function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function toJsxAttribute(attr) {
  const map = {
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'fill-rule': 'fillRule',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'fill-opacity': 'fillOpacity',
    'stroke-opacity': 'strokeOpacity',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-miterlimit': 'strokeMiterlimit',
  }
  return map[attr] || attr
}

function svgToJsx(svgContent) {
  return svgContent.replace(
    /\b(stroke-width|stroke-linecap|stroke-linejoin|fill-rule|clip-rule|clip-path|fill-opacity|stroke-opacity|stroke-dasharray|stroke-dashoffset|stroke-miterlimit)=/g,
    (_, attr) => toJsxAttribute(attr) + '='
  )
}

const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'))

if (svgFiles.length === 0) {
  console.log('No SVG files found in svg/ directory')
  process.exit(0)
}

const components = []

svgFiles.forEach(file => {
  const iconName = path.basename(file, '.svg')
  const componentName = toPascalCase(iconName)

  const rawSvg = fs.readFileSync(path.join(svgDir, file), 'utf8')

  let optimizedSvg
  try {
    const result = optimize(rawSvg, svgoConfig)
    optimizedSvg = result.data
  } catch (err) {
    console.warn(`Failed to optimize ${file}: ${err.message}`)
    return
  }

  const svgMatch = optimizedSvg.match(/<svg([^>]*)>(.*?)<\/svg>/s)
  if (!svgMatch) {
    console.warn(`Could not parse ${file}`)
    return
  }

  const innerSvg = svgToJsx(svgMatch[2].trim())

  const componentCode = `import { forwardRef } from 'react'

interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {}

const ${componentName} = forwardRef<SVGSVGElement, ${componentName}Props>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      ${innerSvg}
    </svg>
  )
)

${componentName}.displayName = '${componentName}'

export { ${componentName} }
export type { ${componentName}Props }
`

  fs.writeFileSync(path.join(srcDir, `${componentName}.tsx`), componentCode)
  components.push({ name: componentName })
})

components.sort((a, b) => a.name.localeCompare(b.name))

const indexContent = components
  .map(({ name }) => `export { ${name} } from './${name}'\nexport type { ${name}Props } from './${name}'`)
  .join('\n') + '\n'

fs.writeFileSync(path.join(srcDir, 'index.ts'), indexContent)

const metadata = JSON.parse(fs.readFileSync(path.join(__dirname, 'metadata.json'), 'utf8'))

const metadataTs = `export type IconName = ${Object.keys(metadata.icons).map(n => `'${n}'`).join(' | ')}

export type IconCategory = ${metadata.categories.map(c => `'${c}'`).join(' | ')}

export const iconCategories: IconCategory[] = ${JSON.stringify(metadata.categories)}

export const iconMetadata: Record<IconName, { category: IconCategory; tags: string[] }> = ${JSON.stringify(metadata.icons, null, 2)} as const
`

fs.writeFileSync(path.join(srcDir, 'metadata.ts'), metadataTs)

const elapsed = ((performance.now() - startTime) / 1000).toFixed(2)
console.log(`Generated ${components.length} icon components + metadata in ${elapsed}s`)
