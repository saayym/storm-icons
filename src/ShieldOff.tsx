import { forwardRef } from 'react'

interface ShieldOffProps extends React.SVGProps<SVGSVGElement> {}

const ShieldOff = forwardRef<SVGSVGElement, ShieldOffProps>(
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
      <path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"/><path d="M4.73 4.73 4 5v7c0 6 8 10 8 10a20.3 20.3 0 0 0 5.62-4.38"/><path d="m1 1 22 22"/>
    </svg>
  )
)

ShieldOff.displayName = 'ShieldOff'

export { ShieldOff }
export type { ShieldOffProps }
