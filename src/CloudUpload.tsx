import { forwardRef } from 'react'

interface CloudUploadProps extends React.SVGProps<SVGSVGElement> {}

const CloudUpload = forwardRef<SVGSVGElement, CloudUploadProps>(
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
      <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"/><path d="m9 15 3-3 3 3"/><path d="M12 12v9"/>
    </svg>
  )
)

CloudUpload.displayName = 'CloudUpload'

export { CloudUpload }
export type { CloudUploadProps }
