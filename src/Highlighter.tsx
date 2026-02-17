import { forwardRef } from 'react'

interface HighlighterProps extends React.SVGProps<SVGSVGElement> {}

const Highlighter = forwardRef<SVGSVGElement, HighlighterProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m18 2 4 4-8 8h-4v-4z"/><path d="m18 2 4 4-8 8h-4v-4z"/><path d="m4 18 2 2h12"/><path d="M2 22h20"/>
    </svg>
  )
)

Highlighter.displayName = 'Highlighter'

export { Highlighter }
export type { HighlighterProps }
