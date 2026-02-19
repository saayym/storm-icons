import { forwardRef } from 'react'

interface FolderLockProps extends React.SVGProps<SVGSVGElement> {}

const FolderLock = forwardRef<SVGSVGElement, FolderLockProps>(
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
      <path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8"/><path d="m10 4 2-2h10v8"/><rect width="8" height="7" x="13" y="11" rx="1"/><path d="M15 11V9a2 2 0 0 1 4 0v2"/>
    </svg>
  )
)

FolderLock.displayName = 'FolderLock'

export { FolderLock }
export type { FolderLockProps }
