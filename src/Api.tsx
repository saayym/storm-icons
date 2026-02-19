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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M4 13h5"/><path d="M12 16V8h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3"/><path d="M20 8v8"/><path d="M9 16v-5.5a2.5 2.5 0 0 0-5 0V16"/>
    </svg>
  )
)

Api.displayName = 'Api'

export { Api }
export type { ApiProps }
