import { forwardRef } from 'react'

interface VideoProps extends React.SVGProps<SVGSVGElement> {}

const Video = forwardRef<SVGSVGElement, VideoProps>(
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
      <rect x="2" y="5" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="5" rx="2"/><path d="m23 7-7 5 7 5z"/>
    </svg>
  )
)

Video.displayName = 'Video'

export { Video }
export type { VideoProps }
