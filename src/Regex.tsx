import { forwardRef } from 'react'

interface RegexProps extends React.SVGProps<SVGSVGElement> {}

const Regex = forwardRef<SVGSVGElement, RegexProps>(
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
      <path d="M17 3v10"/><path d="m12.67 5.5 8.66 5"/><path d="m12.67 10.5 8.66-5"/><path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H5a2 2 0 0 1-2-2"/>
    </svg>
  )
)

Regex.displayName = 'Regex'

export { Regex }
export type { RegexProps }
