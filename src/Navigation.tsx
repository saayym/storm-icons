import { forwardRef } from 'react'

interface NavigationProps extends React.SVGProps<SVGSVGElement> {}

const Navigation = forwardRef<SVGSVGElement, NavigationProps>(
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
      <path d="m12 3 7 18-7-5-7 5z"/>
    </svg>
  )
)

Navigation.displayName = 'Navigation'

export { Navigation }
export type { NavigationProps }
