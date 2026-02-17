import { forwardRef } from 'react'

interface Grid3x3Props extends React.SVGProps<SVGSVGElement> {}

const Grid3x3 = forwardRef<SVGSVGElement, Grid3x3Props>(
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
      <rect x="2" y="2" rx="2"/><path d="M8.67 2v20"/><path d="M15.33 2v20"/><path d="M2 8.67h20"/><path d="M2 15.33h20"/>
    </svg>
  )
)

Grid3x3.displayName = 'Grid3x3'

export { Grid3x3 }
export type { Grid3x3Props }
