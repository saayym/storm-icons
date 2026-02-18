import { forwardRef } from 'react'

interface SaveProps extends React.SVGProps<SVGSVGElement> {}

const Save = forwardRef<SVGSVGElement, SaveProps>(
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
      <path d="M3 3h14l4 4v14H3z"/><path d="M8 14h8v7H8z"/><path d="M7 3h8v5H7z"/>
    </svg>
  )
)

Save.displayName = 'Save'

export { Save }
export type { SaveProps }
