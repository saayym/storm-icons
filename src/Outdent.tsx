import { forwardRef } from 'react'

interface OutdentProps extends React.SVGProps<SVGSVGElement> {}

const Outdent = forwardRef<SVGSVGElement, OutdentProps>(
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
      <path d="m7 8-4 4 4 4"/><path d="M21 12H11"/><path d="M21 6H11"/><path d="M21 18H11"/>
    </svg>
  )
)

Outdent.displayName = 'Outdent'

export { Outdent }
export type { OutdentProps }
