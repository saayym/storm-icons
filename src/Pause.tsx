import { forwardRef } from 'react'

interface PauseProps extends React.SVGProps<SVGSVGElement> {}

const Pause = forwardRef<SVGSVGElement, PauseProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 4h4v16H6z"/><path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 4h4v16h-4z"/><path d="M6 4h4v16H6z"/><path d="M14 4h4v16h-4z"/>
    </svg>
  )
)

Pause.displayName = 'Pause'

export { Pause }
export type { PauseProps }
