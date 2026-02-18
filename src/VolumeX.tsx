import { forwardRef } from 'react'

interface VolumeXProps extends React.SVGProps<SVGSVGElement> {}

const VolumeX = forwardRef<SVGSVGElement, VolumeXProps>(
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
      <path d="M3 8v8h4l6 5V3L7 8z"/><path d="m17 9 4 6"/><path d="m21 9-4 6"/>
    </svg>
  )
)

VolumeX.displayName = 'VolumeX'

export { VolumeX }
export type { VolumeXProps }
