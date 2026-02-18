import { forwardRef } from 'react'

interface SidebarProps extends React.SVGProps<SVGSVGElement> {}

const Sidebar = forwardRef<SVGSVGElement, SidebarProps>(
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
      <path d="M3 3h18v18H3z"/><path d="M9 3v18"/>
    </svg>
  )
)

Sidebar.displayName = 'Sidebar'

export { Sidebar }
export type { SidebarProps }
