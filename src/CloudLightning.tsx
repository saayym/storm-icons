import { forwardRef } from 'react'

interface CloudLightningProps extends React.SVGProps<SVGSVGElement> {}

const CloudLightning = forwardRef<SVGSVGElement, CloudLightningProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10"/><path d="m13 12-3 5h4l-3 5"/><path d="M4.14 15.08A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.97"/>
    </svg>
  )
)

CloudLightning.displayName = 'CloudLightning'

export { CloudLightning }
export type { CloudLightningProps }
