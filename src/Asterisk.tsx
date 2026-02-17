import { forwardRef } from 'react'

interface AsteriskProps extends React.SVGProps<SVGSVGElement> {}

const Asterisk = forwardRef<SVGSVGElement, AsteriskProps>(
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
      <path d="M12 6v12m5.196-9L6.804 15m0-6 10.392 6"/>
    </svg>
  )
)

Asterisk.displayName = 'Asterisk'

export { Asterisk }
export type { AsteriskProps }
