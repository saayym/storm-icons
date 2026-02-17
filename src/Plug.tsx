import { forwardRef } from 'react'

interface PlugProps extends React.SVGProps<SVGSVGElement> {}

const Plug = forwardRef<SVGSVGElement, PlugProps>(
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
      <path d="M12 22v-5"/><path d="M9 8V2m6 6V2"/><path d="M18 8v2a6 6 0 0 1-12 0V8z"/><path d="M6 8h12"/>
    </svg>
  )
)

Plug.displayName = 'Plug'

export { Plug }
export type { PlugProps }
