import { forwardRef } from 'react'

interface KeyboardProps extends React.SVGProps<SVGSVGElement> {}

const Keyboard = forwardRef<SVGSVGElement, KeyboardProps>(
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
      <rect x="2" y="4" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="4" rx="2"/><path d="M6 7h1v1H6z"/><path d="M10 7h1v1h-1z"/><path d="M14 7h1v1h-1z"/><path d="M18 7h1v1h-1z"/><path d="M8 11h8"/>
    </svg>
  )
)

Keyboard.displayName = 'Keyboard'

export { Keyboard }
export type { KeyboardProps }
