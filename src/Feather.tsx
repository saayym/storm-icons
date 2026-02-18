import { forwardRef } from 'react'

interface FeatherProps extends React.SVGProps<SVGSVGElement> {}

const Feather = forwardRef<SVGSVGElement, FeatherProps>(
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
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>
    </svg>
  )
)

Feather.displayName = 'Feather'

export { Feather }
export type { FeatherProps }
