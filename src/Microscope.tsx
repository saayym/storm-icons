import { forwardRef } from 'react'

interface MicroscopeProps extends React.SVGProps<SVGSVGElement> {}

const Microscope = forwardRef<SVGSVGElement, MicroscopeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8 21h8m-4-4v4M6 11a6 6 0 0 0 12 0"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="m14 5-5 9"/><circle cx="14" cy="5" r="2"/><path d="M8 21h8"/><path d="M12 17v4"/>
    </svg>
  )
)

Microscope.displayName = 'Microscope'

export { Microscope }
export type { MicroscopeProps }
