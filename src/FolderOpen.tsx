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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M4 20V5h4l2 2h10v2"/><path d="M2 10h20l-2.5 10h-15z"/>
    </svg>
  )
)

FolderOpen.displayName = 'FolderOpen'

export { FolderOpen }
export type { FolderOpenProps }
