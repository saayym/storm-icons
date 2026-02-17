import { forwardRef } from 'react'

interface TreePineProps extends React.SVGProps<SVGSVGElement> {}

const TreePine = forwardRef<SVGSVGElement, TreePineProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 2 7 9h3l-4 7h4l-5 7h14l-5-7h4l-4-7h3z"/><path d="M12 2 7 9h3l-4 7h4l-5 7h14l-5-7h4l-4-7h3z"/>
    </svg>
  )
)

TreePine.displayName = 'TreePine'

export { TreePine }
export type { TreePineProps }
