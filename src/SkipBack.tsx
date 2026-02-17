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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M19 20 9 12l10-8z"/><path d="M19 20 9 12l10-8z"/><path d="M5 19V5"/>
    </svg>
  )
)

SkipBack.displayName = 'SkipBack'

export { SkipBack }
export type { SkipBackProps }
