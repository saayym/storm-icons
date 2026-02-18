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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 6v14h18V8H11L9 6Z"/>
    </svg>
  )
)

Folder.displayName = 'Folder'

export { Folder }
export type { FolderProps }
