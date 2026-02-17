import { forwardRef } from 'react'

interface PresentationProps extends React.SVGProps<SVGSVGElement> {}

const Presentation = forwardRef<SVGSVGElement, PresentationProps>(
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
      <rect x="2" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="3" rx="2"/><path d="M12 15v5"/><path d="M8 20h8"/>
    </svg>
  )
)

Presentation.displayName = 'Presentation'

export { Presentation }
export type { PresentationProps }
