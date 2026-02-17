import { forwardRef } from 'react'

interface WrapTextProps extends React.SVGProps<SVGSVGElement> {}

const WrapText = forwardRef<SVGSVGElement, WrapTextProps>(
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
      <path d="M3 6h18"/><path d="M3 12h15a3 3 0 1 1 0 6h-4"/><path d="m16 16-2 2 2 2"/><path d="M3 18h7"/>
    </svg>
  )
)

WrapText.displayName = 'WrapText'

export { WrapText }
export type { WrapTextProps }
