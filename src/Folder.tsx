import { forwardRef } from 'react'

interface FolderProps extends React.SVGProps<SVGSVGElement> {}

const Folder = forwardRef<SVGSVGElement, FolderProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 8 2-3h4l2 3h7l2 2v8l-2 2H5l-2-2z"/><path d="m3 8 2-3h4l2 3h7l2 2v8l-2 2H5l-2-2z"/>
    </svg>
  )
)

Folder.displayName = 'Folder'

export { Folder }
export type { FolderProps }
