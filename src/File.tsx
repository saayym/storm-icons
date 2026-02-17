import { forwardRef } from 'react'

interface FileProps extends React.SVGProps<SVGSVGElement> {}

const File = forwardRef<SVGSVGElement, FileProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 2h8l4 4v14l-2 2H6l-2-2V4z"/><path d="M14 2v4h4"/><path d="M6 2h8l4 4v14l-2 2H6l-2-2V4z"/>
    </svg>
  )
)

File.displayName = 'File'

export { File }
export type { FileProps }
