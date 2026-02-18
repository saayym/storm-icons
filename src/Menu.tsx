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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/>
    </svg>
  )
)

Menu.displayName = 'Menu'

export { Menu }
export type { MenuProps }
