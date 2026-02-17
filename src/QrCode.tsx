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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" rx="1"/><rect x="14" y="2" rx="1"/><rect x="2" y="14" rx="1"/><path d="M14 14h4v4h-4z"/><path d="M22 14h-4v4h4v4h-8v-4"/>
    </svg>
  )
)

QrCode.displayName = 'QrCode'

export { QrCode }
export type { QrCodeProps }
