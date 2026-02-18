import { forwardRef } from 'react'

interface UploadProps extends React.SVGProps<SVGSVGElement> {}

const Upload = forwardRef<SVGSVGElement, UploadProps>(
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
      <path d="M12 16V4"/><path d="m7 8 5-5 5 5"/><path d="M5 20h14"/>
    </svg>
  )
)

Upload.displayName = 'Upload'

export { Upload }
export type { UploadProps }
