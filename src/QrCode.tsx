import { forwardRef } from 'react'

interface QrCodeProps extends React.SVGProps<SVGSVGElement> {}

const QrCode = forwardRef<SVGSVGElement, QrCodeProps>(
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
      <path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M3 14h7v7H3z"/><path d="M14 14h3v3h-3z"/><path d="M21 14v3"/><path d="M18 21h3"/><path d="M5 5h3v3H5z"/><path d="M16 5h3v3h-3z"/><path d="M5 16h3v3H5z"/>
    </svg>
  )
)

QrCode.displayName = 'QrCode'

export { QrCode }
export type { QrCodeProps }
