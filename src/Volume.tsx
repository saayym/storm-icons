import { forwardRef } from 'react'

interface VolumeProps extends React.SVGProps<SVGSVGElement> {}

const Volume = forwardRef<SVGSVGElement, VolumeProps>(
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
      <path d="M4 8v8h4l6 5V3L8 8z"/>
    </svg>
  )
)

Volume.displayName = 'Volume'

export { Volume }
export type { VolumeProps }
