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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m16 3 2 2-2 2-2-2z"/><path d="m4 10 2 2-2 2-2-2z"/><path d="m16 17 2 2-2 2-2-2z"/><path d="m6 13 8 5"/><path d="m14 5-8 6"/>
    </svg>
  )
)

Share.displayName = 'Share'

export { Share }
export type { ShareProps }
