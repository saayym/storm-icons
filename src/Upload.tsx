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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m3 17 2 2h14l2-2"/><path d="M10 19v-9"/><path d="M14 19v-5"/><path d="m7 8 5-5 5 5"/>
    </svg>
  )
)

Upload.displayName = 'Upload'

export { Upload }
export type { UploadProps }
