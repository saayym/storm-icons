import { forwardRef } from 'react'

interface EyeOffProps extends React.SVGProps<SVGSVGElement> {}

const EyeOff = forwardRef<SVGSVGElement, EyeOffProps>(
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
      <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7"/><circle cx="12" cy="12" r="3"/><path d="m4 4 16 16"/>
    </svg>
  )
)

EyeOff.displayName = 'EyeOff'

export { EyeOff }
export type { EyeOffProps }
