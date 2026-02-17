import { forwardRef } from 'react'

interface VideoOffProps extends React.SVGProps<SVGSVGElement> {}

const VideoOff = forwardRef<SVGSVGElement, VideoOffProps>(
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
      <path d="M10.66 5H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"/><path d="m1 1 22 22"/><path d="M16 16v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1"/>
    </svg>
  )
)

VideoOff.displayName = 'VideoOff'

export { VideoOff }
export type { VideoOffProps }
