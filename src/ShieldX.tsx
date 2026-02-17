import { forwardRef } from 'react'

interface ShieldXProps extends React.SVGProps<SVGSVGElement> {}

const ShieldX = forwardRef<SVGSVGElement, ShieldXProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9.5 9 5 6"/><path d="m14.5 9-5 6"/>
    </svg>
  )
)

ShieldX.displayName = 'ShieldX'

export { ShieldX }
export type { ShieldXProps }
