import { forwardRef } from 'react'

interface CloudRainProps extends React.SVGProps<SVGSVGElement> {}

const CloudRain = forwardRef<SVGSVGElement, CloudRainProps>(
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
      <path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"/><path d="M11 13v2m0 3v2m4-5v2m0 3v2"/>
    </svg>
  )
)

CloudRain.displayName = 'CloudRain'

export { CloudRain }
export type { CloudRainProps }
