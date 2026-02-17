import { forwardRef } from 'react'

interface FileArchiveProps extends React.SVGProps<SVGSVGElement> {}

const FileArchive = forwardRef<SVGSVGElement, FileArchiveProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M12 12v6"/><path d="M10 18h4v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
    </svg>
  )
)

FileArchive.displayName = 'FileArchive'

export { FileArchive }
export type { FileArchiveProps }
