import { forwardRef } from 'react'

interface MagnetProps extends React.SVGProps<SVGSVGElement> {}

const Magnet = forwardRef<SVGSVGElement, MagnetProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 15V9a6 6 0 0 1 12 0v6"/><path d="M6 15V9a6 6 0 0 1 12 0v6"/><path d="M6 12H2"/><path d="M18 12h4"/><path d="M2 9h4"/><path d="M18 9h4"/>
    </svg>
  )
)

Magnet.displayName = 'Magnet'

export { Magnet }
export type { MagnetProps }
