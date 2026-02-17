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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="11" r="1"/><path d="M11 14v4a2 2 0 0 0 4 0v-6"/><path d="M16 10a4 4 0 0 0-8 0"/><path d="M18 8A6 6 0 0 0 6 8"/><path d="M20 6A8 8 0 0 0 4 6"/>
    </svg>
  )
)

Podcast.displayName = 'Podcast'

export { Podcast }
export type { PodcastProps }
