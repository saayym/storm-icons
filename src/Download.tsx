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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/>
    </svg>
  )
)

Download.displayName = 'Download'

export { Download }
export type { DownloadProps }
