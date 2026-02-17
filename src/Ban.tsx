import { forwardRef } from 'react'

interface BanProps extends React.SVGProps<SVGSVGElement> {}

const Ban = forwardRef<SVGSVGElement, BanProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 14.14 14.14"/>
    </svg>
  )
)

Ban.displayName = 'Ban'

export { Ban }
export type { BanProps }
