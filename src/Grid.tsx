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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 3h8v8H3z"/><path d="M13 3h8v8h-8z"/><path d="M3 13h8v8H3z"/><path d="M13 13h8v8h-8z"/>
    </svg>
  )
)

Grid.displayName = 'Grid'

export { Grid }
export type { GridProps }
