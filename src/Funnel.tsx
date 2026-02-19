import { forwardRef } from 'react'

interface FunnelProps extends React.SVGProps<SVGSVGElement> {}

const Funnel = forwardRef<SVGSVGElement, FunnelProps>(
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
      <path d="M2 4h20l-8 10v8h-4v-8z"/>
    </svg>
  )
)

Funnel.displayName = 'Funnel'

export { Funnel }
export type { FunnelProps }
