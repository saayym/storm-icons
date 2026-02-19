import { forwardRef } from 'react'

interface PodcastProps extends React.SVGProps<SVGSVGElement> {}

const Podcast = forwardRef<SVGSVGElement, PodcastProps>(
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
      <circle cx="12" cy="11" r="3"/><path d="M7.5 7.5a6.5 6.5 0 0 1 9 0"/><path d="M5 5a10 10 0 0 1 14 0"/><path d="M12 14v7"/><path d="M9 18h6"/>
    </svg>
  )
)

Podcast.displayName = 'Podcast'

export { Podcast }
export type { PodcastProps }
