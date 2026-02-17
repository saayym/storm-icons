import { forwardRef } from 'react'

interface SignalLowProps extends React.SVGProps<SVGSVGElement> {}

const SignalLow = forwardRef<SVGSVGElement, SignalLowProps>(
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
      <path d="M4 20v-4"/><path d="M9 20v-2"/><path d="M14 20"/><path d="M19 20"/>
    </svg>
  )
)

SignalLow.displayName = 'SignalLow'

export { SignalLow }
export type { SignalLowProps }
