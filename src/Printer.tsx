import { forwardRef } from 'react'

interface PrinterProps extends React.SVGProps<SVGSVGElement> {}

const Printer = forwardRef<SVGSVGElement, PrinterProps>(
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
      <rect x="4" y="9" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><path d="M6 2h12v7H6z"/><rect x="4" y="9" rx="2"/><path d="M6 14h12v8H6z"/><circle cx="16" cy="12" r="1"/>
    </svg>
  )
)

Printer.displayName = 'Printer'

export { Printer }
export type { PrinterProps }
