import { forwardRef } from 'react'

interface BeakerProps extends React.SVGProps<SVGSVGElement> {}

const Beaker = forwardRef<SVGSVGElement, BeakerProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 3h14v3l-5 7v6l3 2H7l3-2v-6L5 6z"/><path d="M5 3h14v3l-5 7v6l3 2H7l3-2v-6L5 6z"/><path d="M5 3h14"/>
    </svg>
  )
)

Beaker.displayName = 'Beaker'

export { Beaker }
export type { BeakerProps }
