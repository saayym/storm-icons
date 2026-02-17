import { forwardRef } from 'react'

interface FlagTriangleProps extends React.SVGProps<SVGSVGElement> {}

const FlagTriangle = forwardRef<SVGSVGElement, FlagTriangleProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12.73 2.04 7.42 12.86c.35.61-.12 1.35-.82 1.35H5.67c-.7 0-1.17-.74-.82-1.35l7.42-12.86c.36-.62 1.1-.62 1.46 0z"/><path d="m5 22 7-18 7 18"/>
    </svg>
  )
)

FlagTriangle.displayName = 'FlagTriangle'

export { FlagTriangle }
export type { FlagTriangleProps }
