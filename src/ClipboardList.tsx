import { forwardRef } from 'react'

interface ClipboardListProps extends React.SVGProps<SVGSVGElement> {}

const ClipboardList = forwardRef<SVGSVGElement, ClipboardListProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" rx="1"/><path d="M8 11h.01"/><path d="M12 11h4"/><path d="M8 15h.01"/><path d="M12 15h4"/>
    </svg>
  )
)

ClipboardList.displayName = 'ClipboardList'

export { ClipboardList }
export type { ClipboardListProps }
