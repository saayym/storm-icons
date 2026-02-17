import { forwardRef } from 'react'

interface ArrowLeftProps extends React.SVGProps<SVGSVGElement> {}

const ArrowLeft = forwardRef<SVGSVGElement, ArrowLeftProps>(
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
      <path d="M21 10h-9"/><path d="M21 14h-5"/><path d="m10 6-7 6 7 6"/>
    </svg>
  )
)

ArrowLeft.displayName = 'ArrowLeft'

export { ArrowLeft }
export type { ArrowLeftProps }
