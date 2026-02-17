import { forwardRef } from 'react'

interface BinaryProps extends React.SVGProps<SVGSVGElement> {}

const Binary = forwardRef<SVGSVGElement, BinaryProps>(
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
      <rect x="14" y="14" rx="2"/><rect x="6" y="4" rx="2"/><path d="M6 20v-6h4m4-4V4h4"/>
    </svg>
  )
)

Binary.displayName = 'Binary'

export { Binary }
export type { BinaryProps }
