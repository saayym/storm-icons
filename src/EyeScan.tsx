import { forwardRef } from 'react'

interface EyeScanProps extends React.SVGProps<SVGSVGElement> {}

const EyeScan = forwardRef<SVGSVGElement, EyeScanProps>(
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7"/><circle cx="12" cy="12" r="3"/><path d="M2 2h4"/><path d="M2 2v4"/><path d="M22 2h-4"/><path d="M22 2v4"/><path d="M2 22h4"/><path d="M2 22v-4"/><path d="M22 22h-4"/><path d="M22 22v-4"/>
    </svg>
  )
)

EyeScan.displayName = 'EyeScan'

export { EyeScan }
export type { EyeScanProps }
