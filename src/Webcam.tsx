import { forwardRef } from 'react'

interface WebcamProps extends React.SVGProps<SVGSVGElement> {}

const Webcam = forwardRef<SVGSVGElement, WebcamProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0"/><circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3"/><path d="M8 21h8"/><path d="M12 17v4"/>
    </svg>
  )
)

Webcam.displayName = 'Webcam'

export { Webcam }
export type { WebcamProps }
