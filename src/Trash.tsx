import { forwardRef } from 'react'

interface TrashProps extends React.SVGProps<SVGSVGElement> {}

const Trash = forwardRef<SVGSVGElement, TrashProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 7h12l-1 14H7z"/><path d="M4 7h16"/><path d="M6 7h12l-1 14H7z"/><path d="M10 3h4"/>
    </svg>
  )
)

Trash.displayName = 'Trash'

export { Trash }
export type { TrashProps }
