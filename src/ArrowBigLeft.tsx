import { forwardRef } from 'react'

interface ArrowBigLeftProps extends React.SVGProps<SVGSVGElement> {}

const ArrowBigLeft = forwardRef<SVGSVGElement, ArrowBigLeftProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M21 15h-9v4L2 12l10-7v4h9z"/><path d="M21 15h-9v4L2 12l10-7v4h9z"/>
    </svg>
  )
)

ArrowBigLeft.displayName = 'ArrowBigLeft'

export { ArrowBigLeft }
export type { ArrowBigLeftProps }
