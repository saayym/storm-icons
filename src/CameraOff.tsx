import { forwardRef } from 'react'

interface CameraOffProps extends React.SVGProps<SVGSVGElement> {}

const CameraOff = forwardRef<SVGSVGElement, CameraOffProps>(
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
      <path d="m1 1 22 22"/><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34"/><path d="M14.12 14.12a3 3 0 1 1-4.24-4.24"/>
    </svg>
  )
)

CameraOff.displayName = 'CameraOff'

export { CameraOff }
export type { CameraOffProps }
