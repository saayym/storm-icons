import { forwardRef } from 'react'

interface CornerLeftDownProps extends React.SVGProps<SVGSVGElement> {}

const CornerLeftDown = forwardRef<SVGSVGElement, CornerLeftDownProps>(
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
      <path d="m14 15-5 5-5-5"/><path d="M20 4h-7a4 4 0 0 0-4 4v12"/>
    </svg>
  )
)

CornerLeftDown.displayName = 'CornerLeftDown'

export { CornerLeftDown }
export type { CornerLeftDownProps }
