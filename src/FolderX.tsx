import { forwardRef } from 'react'

interface FolderXProps extends React.SVGProps<SVGSVGElement> {}

const FolderX = forwardRef<SVGSVGElement, FolderXProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="m9.5 11.5 5 5"/><path d="m14.5 11.5-5 5"/>
    </svg>
  )
)

FolderX.displayName = 'FolderX'

export { FolderX }
export type { FolderXProps }
