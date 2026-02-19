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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M12 9v12m-8-8a8 8 0 0 0 16 0m1 0h-2M5 13H3"/><path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  )
)

Anchor.displayName = 'Anchor'

export { Anchor }
export type { AnchorProps }
