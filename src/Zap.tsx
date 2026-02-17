import { forwardRef } from 'react'

interface ZapProps extends React.SVGProps<SVGSVGElement> {}

const Zap = forwardRef<SVGSVGElement, ZapProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M13 2 3 14h9l-1 8 10-12h-9z"/><path d="M13 2 3 14h9l-1 8 10-12h-9z"/>
    </svg>
  )
)

Zap.displayName = 'Zap'

export { Zap }
export type { ZapProps }
