import { forwardRef } from 'react'

interface EthernetProps extends React.SVGProps<SVGSVGElement> {}

const Ethernet = forwardRef<SVGSVGElement, EthernetProps>(
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
      <rect x="1" y="9" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="1" y="9" rx="2"/><path d="M7 4v5"/><path d="M12 4v5"/><path d="M17 4v5"/><path d="M7 17v3"/><path d="M17 17v3"/>
    </svg>
  )
)

Ethernet.displayName = 'Ethernet'

export { Ethernet }
export type { EthernetProps }
