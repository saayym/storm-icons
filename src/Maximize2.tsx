import { forwardRef } from 'react'

interface Maximize2Props extends React.SVGProps<SVGSVGElement> {}

const Maximize2 = forwardRef<SVGSVGElement, Maximize2Props>(
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
      <path d="M9 3H3v6"/><path d="m3 3 7 7"/><path d="M15 21h6v-6"/><path d="m21 21-7-7"/>
    </svg>
  )
)

Maximize2.displayName = 'Maximize2'

export { Maximize2 }
export type { Maximize2Props }
