import { forwardRef } from 'react'

interface BookmarkProps extends React.SVGProps<SVGSVGElement> {}

const Bookmark = forwardRef<SVGSVGElement, BookmarkProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 3h14v18l-7-4-7 4z"/><path d="M5 3h14v18l-7-4-7 4z"/>
    </svg>
  )
)

Bookmark.displayName = 'Bookmark'

export { Bookmark }
export type { BookmarkProps }
