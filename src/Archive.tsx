import { forwardRef } from 'react'

interface ArchiveProps extends React.SVGProps<SVGSVGElement> {}

const Archive = forwardRef<SVGSVGElement, ArchiveProps>(
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
      <path d="M3 3h18v5H3z"/><path d="M5 8v13h14V8"/><path d="M10 12h4"/>
    </svg>
  )
)

Archive.displayName = 'Archive'

export { Archive }
export type { ArchiveProps }
