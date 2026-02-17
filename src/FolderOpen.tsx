import { forwardRef } from 'react'

interface FolderOpenProps extends React.SVGProps<SVGSVGElement> {}

const FolderOpen = forwardRef<SVGSVGElement, FolderOpenProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m5 19-2-9h18l-2 9z"/><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v1"/><path d="M3 10v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-1.5l2.02-8.08A1 1 0 0 0 22.05 9H3"/>
    </svg>
  )
)

FolderOpen.displayName = 'FolderOpen'

export { FolderOpen }
export type { FolderOpenProps }
