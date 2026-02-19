import { forwardRef } from 'react'

interface TwitchProps extends React.SVGProps<SVGSVGElement> {}

const Twitch = forwardRef<SVGSVGElement, TwitchProps>(
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
      <path d="M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1z"/><path d="M16 8v4"/><path d="M12 8v4"/>
    </svg>
  )
)

Twitch.displayName = 'Twitch'

export { Twitch }
export type { TwitchProps }
