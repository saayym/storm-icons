import { forwardRef } from 'react'

interface CodeProps extends React.SVGProps<SVGSVGElement> {}

const Code = forwardRef<SVGSVGElement, CodeProps>(
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
      <path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>
    </svg>
  )
)

Code.displayName = 'Code'

export { Code }
export type { CodeProps }
