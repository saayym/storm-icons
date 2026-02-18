import { forwardRef } from 'react'

interface LinkProps extends React.SVGProps<SVGSVGElement> {}

const Link = forwardRef<SVGSVGElement, LinkProps>(
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
      <path d="M10 13c.87 1.16 2.21 2 4 2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4h-2c-1.79 0-3.13.84-4 2"/><path d="M14 11c-.87-1.16-2.21-2-4-2H8c-2.21 0-4 1.79-4 4s1.79 4 4 4h2c1.79 0 3.13-.84 4-2"/>
    </svg>
  )
)

Link.displayName = 'Link'

export { Link }
export type { LinkProps }
