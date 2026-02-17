import { forwardRef } from 'react'

interface SeparatorProps extends React.SVGProps<SVGSVGElement> {}

const Separator = forwardRef<SVGSVGElement, SeparatorProps>(
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
      <path d="M3 12h18"/><path d="m8 8 4-4 4 4"/><path d="m16 16-4 4-4-4"/>
    </svg>
  )
)

Separator.displayName = 'Separator'

export { Separator }
export type { SeparatorProps }
