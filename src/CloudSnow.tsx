import { forwardRef } from 'react'

interface CloudSnowProps extends React.SVGProps<SVGSVGElement> {}

const CloudSnow = forwardRef<SVGSVGElement, CloudSnowProps>(
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
      <path d="M4.14 15.08A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.97"/><path d="M8 15h.01M8 19h.01M12 17h.01M12 21h.01M16 15h.01M16 19h.01"/>
    </svg>
  )
)

CloudSnow.displayName = 'CloudSnow'

export { CloudSnow }
export type { CloudSnowProps }
