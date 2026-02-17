import { forwardRef } from 'react'

interface MusicProps extends React.SVGProps<SVGSVGElement> {}

const Music = forwardRef<SVGSVGElement, MusicProps>(
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
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="18" cy="16" r="3"/>
    </svg>
  )
)

Music.displayName = 'Music'

export { Music }
export type { MusicProps }
