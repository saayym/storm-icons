import { forwardRef } from 'react'

interface AlignRightProps extends React.SVGProps<SVGSVGElement> {}

const AlignRight = forwardRef<SVGSVGElement, AlignRightProps>(
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
      <path d="M21 10H7"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M21 18H7"/>
    </svg>
  )
)

AlignRight.displayName = 'AlignRight'

export { AlignRight }
export type { AlignRightProps }
