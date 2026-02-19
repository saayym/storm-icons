import { forwardRef } from 'react'

interface FileImageProps extends React.SVGProps<SVGSVGElement> {}

const FileImage = forwardRef<SVGSVGElement, FileImageProps>(
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4"/><path d="M11 18h1.5a1.5 1.5 0 0 0 0-3H11v6"/><path d="M20 15h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-3"/><path d="M5 15h3v4.5a1.5 1.5 0 0 1-3 0"/>
    </svg>
  )
)

FileImage.displayName = 'FileImage'

export { FileImage }
export type { FileImageProps }
