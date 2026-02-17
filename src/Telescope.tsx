import { forwardRef } from 'react'

interface TelescopeProps extends React.SVGProps<SVGSVGElement> {}

const Telescope = forwardRef<SVGSVGElement, TelescopeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m13 8 8 4-3 6-8-4z"/><path d="m13 8 8 4-3 6-8-4z"/><path d="m10 14-4 8"/><path d="m10 14 4 8"/><path d="m21 4-9 5"/>
    </svg>
  )
)

Telescope.displayName = 'Telescope'

export { Telescope }
export type { TelescopeProps }
