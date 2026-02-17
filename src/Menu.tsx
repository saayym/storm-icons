import { forwardRef } from 'react'

interface MenuProps extends React.SVGProps<SVGSVGElement> {}

const Menu = forwardRef<SVGSVGElement, MenuProps>(
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
      <path d="M4 6h16"/><path d="M4 12h12"/><path d="M4 18h8"/>
    </svg>
  )
)

Menu.displayName = 'Menu'

export { Menu }
export type { MenuProps }
