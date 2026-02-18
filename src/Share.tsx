import { forwardRef } from 'react'

interface ShareProps extends React.SVGProps<SVGSVGElement> {}

const Share = forwardRef<SVGSVGElement, ShareProps>(
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
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.7 10.7 6.6-4.4"/><path d="m8.7 13.3 6.6 4.4"/>
    </svg>
  )
)

Share.displayName = 'Share'

export { Share }
export type { ShareProps }
