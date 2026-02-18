import { forwardRef } from 'react'

interface ListProps extends React.SVGProps<SVGSVGElement> {}

const List = forwardRef<SVGSVGElement, ListProps>(
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
      <path d="M3 4.5h3v3H3z"/><path d="M9 6h12"/><path d="M3 10.5h3v3H3z"/><path d="M9 12h12"/><path d="M3 16.5h3v3H3z"/><path d="M9 18h12"/>
    </svg>
  )
)

List.displayName = 'List'

export { List }
export type { ListProps }
