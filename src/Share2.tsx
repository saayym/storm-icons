import { forwardRef } from 'react'

interface Share2Props extends React.SVGProps<SVGSVGElement> {}

const Share2 = forwardRef<SVGSVGElement, Share2Props>(
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
      <circle cx="18" cy="5" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="6" cy="12" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="18" cy="19" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>
    </svg>
  )
)

Share2.displayName = 'Share2'

export { Share2 }
export type { Share2Props }
