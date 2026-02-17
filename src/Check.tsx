import { forwardRef } from 'react'

interface CheckProps extends React.SVGProps<SVGSVGElement> {}

const Check = forwardRef<SVGSVGElement, CheckProps>(
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
      <path d="M2 13h4l4 6L20 5"/>
    </svg>
  )
)

Check.displayName = 'Check'

export { Check }
export type { CheckProps }
