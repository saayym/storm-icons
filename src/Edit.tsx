import { forwardRef } from 'react'

interface EditProps extends React.SVGProps<SVGSVGElement> {}

const Edit = forwardRef<SVGSVGElement, EditProps>(
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
      <path d="m16 3 5 5L8 21H3v-5z"/><path d="m13 6 5 5"/>
    </svg>
  )
)

Edit.displayName = 'Edit'

export { Edit }
export type { EditProps }
