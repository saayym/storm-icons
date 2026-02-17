import { forwardRef } from 'react'

interface LayoutListProps extends React.SVGProps<SVGSVGElement> {}

const LayoutList = forwardRef<SVGSVGElement, LayoutListProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="11" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="19" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="3" rx="1"/><rect x="3" y="11" rx="1"/><rect x="3" y="19" rx="1"/>
    </svg>
  )
)

LayoutList.displayName = 'LayoutList'

export { LayoutList }
export type { LayoutListProps }
