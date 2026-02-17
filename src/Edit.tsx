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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m17 3 4 4L9 19H5v-4z"/><path d="m17 3 4 4L9 19H5v-4z"/><path d="m14.5 5.5 4 4"/>
    </svg>
  )
)

Edit.displayName = 'Edit'

export { Edit }
export type { EditProps }
