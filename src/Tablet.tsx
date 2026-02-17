import { forwardRef } from 'react'

interface TabletProps extends React.SVGProps<SVGSVGElement> {}

const Tablet = forwardRef<SVGSVGElement, TabletProps>(
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
      <rect x="4" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="2" rx="2"/><path d="M10 18h4"/>
    </svg>
  )
)

Tablet.displayName = 'Tablet'

export { Tablet }
export type { TabletProps }
