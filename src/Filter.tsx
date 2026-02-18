import { forwardRef } from 'react'

interface FilterProps extends React.SVGProps<SVGSVGElement> {}

const Filter = forwardRef<SVGSVGElement, FilterProps>(
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
      <path d="M3 4h18l-7 9v7h-4v-7z"/>
    </svg>
  )
)

Filter.displayName = 'Filter'

export { Filter }
export type { FilterProps }
