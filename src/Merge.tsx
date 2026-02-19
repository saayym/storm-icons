import { forwardRef } from 'react'

interface MergeProps extends React.SVGProps<SVGSVGElement> {}

const Merge = forwardRef<SVGSVGElement, MergeProps>(
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
      <path d="m8 7 4-4 4 4"/><path d="M12 3v5.394A6.74 6.74 0 0 1 9 14a6.74 6.74 0 0 0-3 5.606V21"/><path d="M12 3v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21"/>
    </svg>
  )
)

Merge.displayName = 'Merge'

export { Merge }
export type { MergeProps }
