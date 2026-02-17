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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 3h6v6"/><path d="M9 21H3v-6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/>
    </svg>
  )
)

Maximize2.displayName = 'Maximize2'

export { Maximize2 }
export type { Maximize2Props }
