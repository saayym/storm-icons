import { forwardRef } from 'react'

interface LayoutProps extends React.SVGProps<SVGSVGElement> {}

const Layout = forwardRef<SVGSVGElement, LayoutProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
    </svg>
  )
)

Layout.displayName = 'Layout'

export { Layout }
export type { LayoutProps }
