import { forwardRef } from 'react'

interface CakeProps extends React.SVGProps<SVGSVGElement> {}

const Cake = forwardRef<SVGSVGElement, CakeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M2 18h20v4H2z"/><path d="M2 18h20v4H2z"/><path d="M2 18c0-4 4.5-6 10-6s10 2 10 6"/><path d="M12 4c1.5 0 2-1 2-2s-.5-2-2-2-2 1-2 2 .5 2 2 2"/><path d="M12 4v8"/>
    </svg>
  )
)

Cake.displayName = 'Cake'

export { Cake }
export type { CakeProps }
