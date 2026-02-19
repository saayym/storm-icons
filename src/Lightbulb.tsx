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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M9 18h6"/><path d="M10 22h4"/><path d="M15 14c.2-1 .7-1.7 1.5-2.5a5 5 0 1 0-9 0c.8.8 1.3 1.5 1.5 2.5"/>
    </svg>
  )
)

Lightbulb.displayName = 'Lightbulb'

export { Lightbulb }
export type { LightbulbProps }
