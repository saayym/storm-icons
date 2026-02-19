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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M6 5v8"/><path d="m3 7 6 4"/><path d="m9 7-6 4"/><circle cx="17" cy="17" r="4"/><path d="M13 17v.01"/>
    </svg>
  )
)

Regex.displayName = 'Regex'

export { Regex }
export type { RegexProps }
