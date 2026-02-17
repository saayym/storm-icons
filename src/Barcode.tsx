import { forwardRef } from 'react'

interface BarcodeProps extends React.SVGProps<SVGSVGElement> {}

const Barcode = forwardRef<SVGSVGElement, BarcodeProps>(
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
      <path d="M3 5v14M6 5v14M9 5v14m3-14v14m3-14v14m3-14v14m3-14v14"/>
    </svg>
  )
)

Barcode.displayName = 'Barcode'

export { Barcode }
export type { BarcodeProps }
