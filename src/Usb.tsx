import { forwardRef } from 'react'

interface UsbProps extends React.SVGProps<SVGSVGElement> {}

const Usb = forwardRef<SVGSVGElement, UsbProps>(
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
      <circle cx="10" cy="18" r="2"/><circle cx="18" cy="14" r="2"/><path d="m12 2 3 4H9z"/><path d="M12 6v10"/><path d="m12 12 4 2"/>
    </svg>
  )
)

Usb.displayName = 'Usb'

export { Usb }
export type { UsbProps }
