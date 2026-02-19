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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="5" height="18" x="3" y="3" rx="1"/><rect width="5" height="12" x="10" y="3" rx="1"/><rect width="5" height="8" x="17" y="3" rx="1"/>
    </svg>
  )
)

Kanban.displayName = 'Kanban'

export { Kanban }
export type { KanbanProps }
