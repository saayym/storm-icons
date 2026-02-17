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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 11 19-9-9 19-2-8z"/><path d="m3 11 19-9-9 19-2-8z"/>
    </svg>
  )
)

Navigation.displayName = 'Navigation'

export { Navigation }
export type { NavigationProps }
