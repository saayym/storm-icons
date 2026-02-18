import { forwardRef } from 'react'

interface SkipForwardProps extends React.SVGProps<SVGSVGElement> {}

const SkipForward = forwardRef<SVGSVGElement, SkipForwardProps>(
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
      <path d="M5 4v16l10-8z"/><path d="M19 4v16"/>
    </svg>
  )
)

SkipForward.displayName = 'SkipForward'

export { SkipForward }
export type { SkipForwardProps }
