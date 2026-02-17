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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M7 21h10"/><path d="M5.5 13.5 17 2l5 5-11.5 11.5a2 2 0 0 1-1.41.59H6.17a2 2 0 0 1-1.41-.59L3 17z"/>
    </svg>
  )
)

Eraser.displayName = 'Eraser'

export { Eraser }
export type { EraserProps }
