import { forwardRef } from 'react'

interface FileTextProps extends React.SVGProps<SVGSVGElement> {}

const FileText = forwardRef<SVGSVGElement, FileTextProps>(
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
      <path d="M6 2h8l4 4v16H6Z"/><path d="M14 2v4h4"/><path d="M9 10h6"/><path d="M9 14h6"/><path d="M9 18h4"/>
    </svg>
  )
)

FileText.displayName = 'FileText'

export { FileText }
export type { FileTextProps }
