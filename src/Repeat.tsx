import { forwardRef } from 'react'

interface RepeatProps extends React.SVGProps<SVGSVGElement> {}

const Repeat = forwardRef<SVGSVGElement, RepeatProps>(
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
      <path d="M4 12V9a3 3 0 0 1 3-3h13m-3-3 3 3-3 3"/><path d="M20 12v3a3 3 0 0 1-3 3H4m3 3-3-3 3-3"/>
    </svg>
  )
)

Repeat.displayName = 'Repeat'

export { Repeat }
export type { RepeatProps }
