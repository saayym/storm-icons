import { forwardRef } from 'react'

interface MegaphoneProps extends React.SVGProps<SVGSVGElement> {}

const Megaphone = forwardRef<SVGSVGElement, MegaphoneProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 11 18-5v12L3 13z"/><path d="m3 11 18-5v12L3 13z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
    </svg>
  )
)

Megaphone.displayName = 'Megaphone'

export { Megaphone }
export type { MegaphoneProps }
