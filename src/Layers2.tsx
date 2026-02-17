import { forwardRef } from 'react'

interface Layers2Props extends React.SVGProps<SVGSVGElement> {}

const Layers2 = forwardRef<SVGSVGElement, Layers2Props>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 16-8-4.45 8-4.45 8 4.45z"/><path d="m12 16-8-4.45 8-4.45 8 4.45z"/><path d="M4 11.55 12 16l8-4.45"/>
    </svg>
  )
)

Layers2.displayName = 'Layers2'

export { Layers2 }
export type { Layers2Props }
