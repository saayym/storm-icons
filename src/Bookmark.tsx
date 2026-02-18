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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M5 3h14v18l-7-6-7 6z"/>
    </svg>
  )
)

Bookmark.displayName = 'Bookmark'

export { Bookmark }
export type { BookmarkProps }
