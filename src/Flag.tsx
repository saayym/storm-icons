import { forwardRef } from 'react'

interface FlagProps extends React.SVGProps<SVGSVGElement> {}

const Flag = forwardRef<SVGSVGElement, FlagProps>(
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
      <path d="M4 3v18"/><path d="M4 3h16l-4 5.5 4 5.5H4"/>
    </svg>
  )
)

Flag.displayName = 'Flag'

export { Flag }
export type { FlagProps }
