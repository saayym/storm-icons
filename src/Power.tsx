import { forwardRef } from 'react'

interface PowerProps extends React.SVGProps<SVGSVGElement> {}

const Power = forwardRef<SVGSVGElement, PowerProps>(
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
      <path d="M12 3v9"/><path d="M7.5 6.5a8 8 0 1 0 9 0"/>
    </svg>
  )
)

Power.displayName = 'Power'

export { Power }
export type { PowerProps }
