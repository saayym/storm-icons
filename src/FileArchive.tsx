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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 12v.01"/><path d="M14 14v.01"/><path d="M10 16v.01"/><path d="M14 18v.01"/>
    </svg>
  )
)

FileArchive.displayName = 'FileArchive'

export { FileArchive }
export type { FileArchiveProps }
