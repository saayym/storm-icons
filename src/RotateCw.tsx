import { forwardRef } from 'react'

interface RotateCwProps extends React.SVGProps<SVGSVGElement> {}

const RotateCw = forwardRef<SVGSVGElement, RotateCwProps>(
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
      <path d="M21 4v5h-5"/><path d="M21 9a9 9 0 1 0-2.3 9.7"/>
    </svg>
  )
)

RotateCw.displayName = 'RotateCw'

export { RotateCw }
export type { RotateCwProps }
