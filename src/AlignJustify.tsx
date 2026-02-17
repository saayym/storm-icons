import { forwardRef } from 'react'

interface AlignJustifyProps extends React.SVGProps<SVGSVGElement> {}

const AlignJustify = forwardRef<SVGSVGElement, AlignJustifyProps>(
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
      <path d="M21 10H3"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M21 18H3"/>
    </svg>
  )
)

AlignJustify.displayName = 'AlignJustify'

export { AlignJustify }
export type { AlignJustifyProps }
