import { forwardRef } from 'react'

interface TreeProps extends React.SVGProps<SVGSVGElement> {}

const Tree = forwardRef<SVGSVGElement, TreeProps>(
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
      <path d="M12 3 4 14h5l-2 7h10l-2-7h5z"/>
    </svg>
  )
)

Tree.displayName = 'Tree'

export { Tree }
export type { TreeProps }
