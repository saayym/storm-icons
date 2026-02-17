import { forwardRef } from 'react'

interface PanelTopProps extends React.SVGProps<SVGSVGElement> {}

const PanelTop = forwardRef<SVGSVGElement, PanelTopProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="3" rx="2"/><path d="M3 9h18"/>
    </svg>
  )
)

PanelTop.displayName = 'PanelTop'

export { PanelTop }
export type { PanelTopProps }
