import { forwardRef } from 'react'

interface SeparatorHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const SeparatorHorizontal = forwardRef<SVGSVGElement, SeparatorHorizontalProps>(
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
      <path d="M3 12h18"/><path d="m8 8 4-4 4 4"/><path d="m16 16-4 4-4-4"/>
    </svg>
  )
)

SeparatorHorizontal.displayName = 'SeparatorHorizontal'

export { SeparatorHorizontal }
export type { SeparatorHorizontalProps }
