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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M13 2 4 13h8l-1 9 9-11h-8z"/>
    </svg>
  )
)

Zap.displayName = 'Zap'

export { Zap }
export type { ZapProps }
