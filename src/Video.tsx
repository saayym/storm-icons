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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m23 7-7 5 7 5z"/><rect width="15" height="14" x="1" y="5" rx="2" ry="2"/>
    </svg>
  )
)

Video.displayName = 'Video'

export { Video }
export type { VideoProps }
