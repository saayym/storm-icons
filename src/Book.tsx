import { forwardRef } from 'react'

interface BookProps extends React.SVGProps<SVGSVGElement> {}

const Book = forwardRef<SVGSVGElement, BookProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5z"/><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4h16v16H6.5A2.5 2.5 0 0 1 4 17.5z"/>
    </svg>
  )
)

Book.displayName = 'Book'

export { Book }
export type { BookProps }
