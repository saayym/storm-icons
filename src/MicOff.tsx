import { forwardRef } from 'react'

interface MicOffProps extends React.SVGProps<SVGSVGElement> {}

const MicOff = forwardRef<SVGSVGElement, MicOffProps>(
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
      <path d="m1 1 22 22"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2c0 .76-.12 1.49-.34 2.18"/><path d="M12 19v4"/><path d="M8 23h8"/>
    </svg>
  )
)

MicOff.displayName = 'MicOff'

export { MicOff }
export type { MicOffProps }
