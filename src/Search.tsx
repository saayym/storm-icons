import { forwardRef } from 'react'

interface SearchProps extends React.SVGProps<SVGSVGElement> {}

const Search = forwardRef<SVGSVGElement, SearchProps>(
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
      <circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/>
    </svg>
  )
)

Search.displayName = 'Search'

export { Search }
export type { SearchProps }
