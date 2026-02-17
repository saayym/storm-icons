import { forwardRef } from 'react'

interface FileVideoProps extends React.SVGProps<SVGSVGElement> {}

const FileVideo = forwardRef<SVGSVGElement, FileVideoProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m10 11 5 3-5 3z"/>
    </svg>
  )
)

FileVideo.displayName = 'FileVideo'

export { FileVideo }
export type { FileVideoProps }
