import { forwardRef } from 'react'

interface TvProps extends React.SVGProps<SVGSVGElement> {}

const Tv = forwardRef<SVGSVGElement, TvProps>(
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
      <rect x="2" y="7" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="7" rx="2"/><path d="m17 2-5 5-5-5"/>
    </svg>
  )
)

Tv.displayName = 'Tv'

export { Tv }
export type { TvProps }
