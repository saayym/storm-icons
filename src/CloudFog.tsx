import { forwardRef } from 'react'

interface CloudFogProps extends React.SVGProps<SVGSVGElement> {}

const CloudFog = forwardRef<SVGSVGElement, CloudFogProps>(
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
      <path d="M4.14 15.08A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.97"/><path d="M16 17H7m10 4H9"/>
    </svg>
  )
)

CloudFog.displayName = 'CloudFog'

export { CloudFog }
export type { CloudFogProps }
