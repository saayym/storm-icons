import { forwardRef } from 'react'

interface FolderPlusProps extends React.SVGProps<SVGSVGElement> {}

const FolderPlus = forwardRef<SVGSVGElement, FolderPlusProps>(
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
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><path d="M12 11v6"/><path d="M9 14h6"/>
    </svg>
  )
)

FolderPlus.displayName = 'FolderPlus'

export { FolderPlus }
export type { FolderPlusProps }
