import { forwardRef } from 'react'

interface StarProps extends React.SVGProps<SVGSVGElement> {}

const Star = forwardRef<SVGSVGElement, StarProps>(
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
      <path d="m12 2 2.9 6.6 7.1.7-5.2 4.5 1.4 7.2-6.2-3.7L5.8 21l1.4-7.2L2 9.3l7.1-.7z"/>
    </svg>
  )
)

Star.displayName = 'Star'

export { Star }
export type { StarProps }
