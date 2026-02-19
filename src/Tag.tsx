import { forwardRef } from 'react'

interface TagProps extends React.SVGProps<SVGSVGElement> {}

const Tag = forwardRef<SVGSVGElement, TagProps>(
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
      <path d="M12.586 3H20a1 1 0 0 1 1 1v7.414a1 1 0 0 1-.293.707l-9.414 9.414a1 1 0 0 1-1.414 0l-7.414-7.414a1 1 0 0 1 0-1.414l9.414-9.414A1 1 0 0 1 12.586 3"/><circle cx="16.5" cy="7.5" r="1.5"/>
    </svg>
  )
)

Tag.displayName = 'Tag'

export { Tag }
export type { TagProps }
