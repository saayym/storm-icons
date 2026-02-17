import { forwardRef } from 'react'

interface CopyProps extends React.SVGProps<SVGSVGElement> {}

const Copy = forwardRef<SVGSVGElement, CopyProps>(
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
      <rect x="8" y="8" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="8" y="8" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
    </svg>
  )
)

Copy.displayName = 'Copy'

export { Copy }
export type { CopyProps }
