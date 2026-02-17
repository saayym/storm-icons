import { forwardRef } from 'react'

interface GridProps extends React.SVGProps<SVGSVGElement> {}

const Grid = forwardRef<SVGSVGElement, GridProps>(
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
      <path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M14 14h7v7h-7z"/><path d="M3 14h7v7H3z"/>
    </svg>
  )
)

Grid.displayName = 'Grid'

export { Grid }
export type { GridProps }
