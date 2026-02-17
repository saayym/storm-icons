import { forwardRef } from 'react'

interface ServerProps extends React.SVGProps<SVGSVGElement> {}

const Server = forwardRef<SVGSVGElement, ServerProps>(
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
      <rect x="2" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="2" rx="2"/><rect x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>
    </svg>
  )
)

Server.displayName = 'Server'

export { Server }
export type { ServerProps }
