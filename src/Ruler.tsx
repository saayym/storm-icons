import { forwardRef } from 'react'

interface RulerProps extends React.SVGProps<SVGSVGElement> {}

const Ruler = forwardRef<SVGSVGElement, RulerProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 3 3 6l15 15 3-3z"/><path d="m21 6-3-3L3 18l3 3z"/><path d="M9 9 7 7"/><path d="m12 6-2 2"/><path d="m15 9-2 2"/><path d="m18 12-2 2"/>
    </svg>
  )
)

Ruler.displayName = 'Ruler'

export { Ruler }
export type { RulerProps }
