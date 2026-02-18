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
      <path d="m16 16-4-4-4 4"/><path d="M12 12v9"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
    </svg>
  )
)

CloudUpload.displayName = 'CloudUpload'

export { CloudUpload }
export type { CloudUploadProps }
