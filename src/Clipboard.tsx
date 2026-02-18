import { forwardRef } from 'react'

interface ClipboardProps extends React.SVGProps<SVGSVGElement> {}

const Clipboard = forwardRef<SVGSVGElement, ClipboardProps>(
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
      <path d="M5 4h14v18H5z"/><path d="M9 2h6v4H9z"/>
    </svg>
  )
)

Clipboard.displayName = 'Clipboard'

export { Clipboard }
export type { ClipboardProps }
