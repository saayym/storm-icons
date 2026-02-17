import { forwardRef } from 'react'

interface Volume2Props extends React.SVGProps<SVGSVGElement> {}

const Volume2 = forwardRef<SVGSVGElement, Volume2Props>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M11 5 6 9H2v6h4l5 4z"/><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  )
)

Volume2.displayName = 'Volume2'

export { Volume2 }
export type { Volume2Props }
