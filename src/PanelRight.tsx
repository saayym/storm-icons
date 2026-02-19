import { forwardRef } from 'react'

interface PanelRightProps extends React.SVGProps<SVGSVGElement> {}

const PanelRight = forwardRef<SVGSVGElement, PanelRightProps>(
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
      <rect width="18" height="18" x="3" y="3" rx="1"/><path d="M15 3v18"/>
    </svg>
  )
)

PanelRight.displayName = 'PanelRight'

export { PanelRight }
export type { PanelRightProps }
