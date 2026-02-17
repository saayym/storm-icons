import { forwardRef } from 'react'

interface ApiProps extends React.SVGProps<SVGSVGElement> {}

const Api = forwardRef<SVGSVGElement, ApiProps>(
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
      <path d="m4 4 4 16m4-16 4 16"/><path d="M4 12h16"/>
    </svg>
  )
)

Api.displayName = 'Api'

export { Api }
export type { ApiProps }
