import { forwardRef } from 'react'

interface SmartphoneProps extends React.SVGProps<SVGSVGElement> {}

const Smartphone = forwardRef<SVGSVGElement, SmartphoneProps>(
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  )
)

Smartphone.displayName = 'Smartphone'

export { Smartphone }
export type { SmartphoneProps }
