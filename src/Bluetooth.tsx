import { forwardRef } from 'react'

interface BluetoothProps extends React.SVGProps<SVGSVGElement> {}

const Bluetooth = forwardRef<SVGSVGElement, BluetoothProps>(
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
      <path d="m6.5 6.5 11 11L12 23V1l5.5 5.5-11 11"/>
    </svg>
  )
)

Bluetooth.displayName = 'Bluetooth'

export { Bluetooth }
export type { BluetoothProps }
