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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
    </svg>
  )
)

Tablet.displayName = 'Tablet'

export { Tablet }
export type { TabletProps }
