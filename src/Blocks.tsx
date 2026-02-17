import { forwardRef } from 'react'

interface BlocksProps extends React.SVGProps<SVGSVGElement> {}

const Blocks = forwardRef<SVGSVGElement, BlocksProps>(
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
      <rect x="2" y="2" rx="1"/><rect x="13" y="2" rx="1"/><rect x="2" y="13" rx="1"/><rect x="13" y="13" rx="1"/>
    </svg>
  )
)

Blocks.displayName = 'Blocks'

export { Blocks }
export type { BlocksProps }
