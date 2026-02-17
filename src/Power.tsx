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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><path d="M12 2v10"/>
    </svg>
  )
)

Power.displayName = 'Power'

export { Power }
export type { PowerProps }
