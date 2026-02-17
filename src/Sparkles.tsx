import { forwardRef } from 'react'

interface SparklesProps extends React.SVGProps<SVGSVGElement> {}

const Sparkles = forwardRef<SVGSVGElement, SparklesProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/><path d="m19 17 .5 1.5 1.5.5-1.5.5L19 21l-.5-1.5L17 19l1.5-.5z"/>
    </svg>
  )
)

Sparkles.displayName = 'Sparkles'

export { Sparkles }
export type { SparklesProps }
