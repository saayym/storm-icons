import { forwardRef } from 'react'

interface BotProps extends React.SVGProps<SVGSVGElement> {}

const Bot = forwardRef<SVGSVGElement, BotProps>(
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
      <rect x="3" y="8" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="8" rx="2"/><path d="M12 2v6"/><circle cx="12" cy="2" r="1"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M9 17h6"/>
    </svg>
  )
)

Bot.displayName = 'Bot'

export { Bot }
export type { BotProps }
