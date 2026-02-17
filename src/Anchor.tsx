import { forwardRef } from 'react'

interface AnchorProps extends React.SVGProps<SVGSVGElement> {}

const Anchor = forwardRef<SVGSVGElement, AnchorProps>(
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
      <circle cx="12" cy="5" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="5" r="3"/><path d="M12 8v14"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  )
)

Anchor.displayName = 'Anchor'

export { Anchor }
export type { AnchorProps }
