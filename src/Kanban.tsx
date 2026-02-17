import { forwardRef } from 'react'

interface KanbanProps extends React.SVGProps<SVGSVGElement> {}

const Kanban = forwardRef<SVGSVGElement, KanbanProps>(
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
      <rect x="2" y="2" rx="1"/><rect x="10" y="2" rx="1"/><rect x="18" y="2" rx="1"/>
    </svg>
  )
)

Kanban.displayName = 'Kanban'

export { Kanban }
export type { KanbanProps }
