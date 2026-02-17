import { forwardRef } from 'react'

interface LightbulbProps extends React.SVGProps<SVGSVGElement> {}

const Lightbulb = forwardRef<SVGSVGElement, LightbulbProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M9 18h6v-3.72a7 7 0 1 0-6 0z"/><path d="M15 14.28a7 7 0 1 0-6 0"/><path d="M9 18h6"/><path d="M10 22h4"/>
    </svg>
  )
)

Lightbulb.displayName = 'Lightbulb'

export { Lightbulb }
export type { LightbulbProps }
