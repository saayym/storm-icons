import { forwardRef } from 'react'

interface PhoneOffProps extends React.SVGProps<SVGSVGElement> {}

const PhoneOff = forwardRef<SVGSVGElement, PhoneOffProps>(
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
      <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.8 12.8 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.4 19.4 0 0 1-3.33-2.67"/><path d="M14.68 14.68a16.06 16.06 0 0 1-6.59-6.59l1.27-1.27a2 2 0 0 0 .45-2.11 12.8 12.8 0 0 0-.7-2.81 2 2 0 0 0-2 .1h-3a2 2 0 0 0-2 2.18c.14 1.66.54 3.29 1.18 4.82"/><path d="M23 1 1 23"/>
    </svg>
  )
)

PhoneOff.displayName = 'PhoneOff'

export { PhoneOff }
export type { PhoneOffProps }
