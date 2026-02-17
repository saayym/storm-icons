import { forwardRef } from 'react'

interface TagsProps extends React.SVGProps<SVGSVGElement> {}

const Tags = forwardRef<SVGSVGElement, TagsProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 3h8l10 10-8 8L3 11z"/><path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="7.5" cy="7.5" r="1"/><path d="m7 3 8 8"/>
    </svg>
  )
)

Tags.displayName = 'Tags'

export { Tags }
export type { TagsProps }
