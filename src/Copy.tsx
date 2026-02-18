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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M4 8h12v14H4z"/><path d="M8 8V4h12v12h-4"/>
    </svg>
  )
)

Copy.displayName = 'Copy'

export { Copy }
export type { CopyProps }
