import { forwardRef } from 'react'

interface HeartProps extends React.SVGProps<SVGSVGElement> {}

const Heart = forwardRef<SVGSVGElement, HeartProps>(
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
      <path d="m12 21-8.5-8.5c-2-2-2-5.5 0-7.5S9 3 11 5l1 1 1-1c2-2 5.5-2 7.5 0s2 5.5 0 7.5z"/>
    </svg>
  )
)

Heart.displayName = 'Heart'

export { Heart }
export type { HeartProps }
