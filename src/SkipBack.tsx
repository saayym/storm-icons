import { forwardRef } from 'react'

interface SkipBackProps extends React.SVGProps<SVGSVGElement> {}

const SkipBack = forwardRef<SVGSVGElement, SkipBackProps>(
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
      <path d="M5 4v16"/><path d="M19 4v16L9 12z"/>
    </svg>
  )
)

SkipBack.displayName = 'SkipBack'

export { SkipBack }
export type { SkipBackProps }
