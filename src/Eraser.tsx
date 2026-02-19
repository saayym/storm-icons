import { forwardRef } from 'react'

interface EraserProps extends React.SVGProps<SVGSVGElement> {}

const Eraser = forwardRef<SVGSVGElement, EraserProps>(
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
      <path d="M19 20H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l10-10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41L11.5 20"/><path d="M18 13.3 11.7 7"/>
    </svg>
  )
)

Eraser.displayName = 'Eraser'

export { Eraser }
export type { EraserProps }
