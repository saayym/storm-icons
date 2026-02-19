import { forwardRef } from 'react'

interface WandProps extends React.SVGProps<SVGSVGElement> {}

const Wand = forwardRef<SVGSVGElement, WandProps>(
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
      <path d="M6 21 21 6l-3-3L3 18z"/><path d="m15 6 3 3"/><path d="M9 3a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2"/><path d="M19 13a2 2 0 0 0 2 2 2 2 0 0 0-2 2 2 2 0 0 0-2-2 2 2 0 0 0 2-2"/>
    </svg>
  )
)

Wand.displayName = 'Wand'

export { Wand }
export type { WandProps }
