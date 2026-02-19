import { forwardRef } from 'react'

interface ReplaceProps extends React.SVGProps<SVGSVGElement> {}

const Replace = forwardRef<SVGSVGElement, ReplaceProps>(
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
      <rect width="8" height="6" x="2" y="4" rx="1"/><rect width="8" height="6" x="14" y="14" rx="1"/><path d="M15 4h4v6"/><path d="M9 20H5v-6"/>
    </svg>
  )
)

Replace.displayName = 'Replace'

export { Replace }
export type { ReplaceProps }
