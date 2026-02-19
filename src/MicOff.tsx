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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m3 3 18 18"/><path d="M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1-.13.874m-2 2A3 3 0 0 1 9 10.002v-1"/><path d="M5 10a7 7 0 0 0 10.846 5.85m2-2A6.97 6.97 0 0 0 18.998 10"/><path d="M8 21h8"/><path d="M12 17v4"/>
    </svg>
  )
)

MicOff.displayName = 'MicOff'

export { MicOff }
export type { MicOffProps }
