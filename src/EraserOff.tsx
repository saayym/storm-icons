import { forwardRef } from 'react'

interface EraserOffProps extends React.SVGProps<SVGSVGElement> {}

const EraserOff = forwardRef<SVGSVGElement, EraserOffProps>(
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
      <path d="m3 3 18 18"/><path d="M19 20H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l5-4.993m2.009-2.01 3-3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41q-2.125 2.147-2.97 3m-2.02 2.043-4.211 4.256"/><path d="M18 13.3 11.7 7"/>
    </svg>
  )
)

EraserOff.displayName = 'EraserOff'

export { EraserOff }
export type { EraserOffProps }
