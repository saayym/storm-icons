import { forwardRef } from 'react'

interface YoutubeProps extends React.SVGProps<SVGSVGElement> {}

const Youtube = forwardRef<SVGSVGElement, YoutubeProps>(
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
      <path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"/><path d="m10 9 5 3-5 3z"/>
    </svg>
  )
)

Youtube.displayName = 'Youtube'

export { Youtube }
export type { YoutubeProps }
