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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M22 3H2l8 9.46V19l4 2v-8.54z"/><path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>
    </svg>
  )
)

Filter.displayName = 'Filter'

export { Filter }
export type { FilterProps }
