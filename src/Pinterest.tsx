import { forwardRef } from 'react'

interface PinterestProps extends React.SVGProps<SVGSVGElement> {}

const Pinterest = forwardRef<SVGSVGElement, PinterestProps>(
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
      <path d="m8 20 4-9"/><path d="M10.7 14c.437 1.263 1.43 2 2.55 2 2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
    </svg>
  )
)

Pinterest.displayName = 'Pinterest'

export { Pinterest }
export type { PinterestProps }
