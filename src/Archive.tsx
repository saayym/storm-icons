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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><path d="M21 8v13H3V8"/><rect x="2" y="3" rx="1"/><path d="M10 12h4"/>
    </svg>
  )
)

Archive.displayName = 'Archive'

export { Archive }
export type { ArchiveProps }
