import { forwardRef } from 'react'

interface DownloadProps extends React.SVGProps<SVGSVGElement> {}

const Download = forwardRef<SVGSVGElement, DownloadProps>(
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
      <path d="m3 17 2 2h14l2-2"/><path d="M10 3v9"/><path d="M14 3v5"/><path d="m7 14 5 5 5-5"/>
    </svg>
  )
)

Download.displayName = 'Download'

export { Download }
export type { DownloadProps }
