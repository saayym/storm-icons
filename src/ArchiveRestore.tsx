import { forwardRef } from 'react'

interface ArchiveRestoreProps extends React.SVGProps<SVGSVGElement> {}

const ArchiveRestore = forwardRef<SVGSVGElement, ArchiveRestoreProps>(
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
      <path d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/><path d="M12 10v4"/>
    </svg>
  )
)

ArchiveRestore.displayName = 'ArchiveRestore'

export { ArchiveRestore }
export type { ArchiveRestoreProps }
