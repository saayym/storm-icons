import { forwardRef } from 'react'

interface AlignCenterProps extends React.SVGProps<SVGSVGElement> {}

const AlignCenter = forwardRef<SVGSVGElement, AlignCenterProps>(
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
      <path d="M18 10H6"/><path d="M21 6H3"/><path d="M21 14H3"/><path d="M18 18H6"/>
    </svg>
  )
)

AlignCenter.displayName = 'AlignCenter'

export { AlignCenter }
export type { AlignCenterProps }
