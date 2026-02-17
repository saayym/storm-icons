import { forwardRef } from 'react'

interface WifiOffProps extends React.SVGProps<SVGSVGElement> {}

const WifiOff = forwardRef<SVGSVGElement, WifiOffProps>(
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
      <path d="m1 1 22 22"/><path d="M16.72 11.06A11 11 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.9 15.9 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><path d="M12 20h.01"/>
    </svg>
  )
)

WifiOff.displayName = 'WifiOff'

export { WifiOff }
export type { WifiOffProps }
