import { forwardRef } from 'react'

interface DropletProps extends React.SVGProps<SVGSVGElement> {}

const Droplet = forwardRef<SVGSVGElement, DropletProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="m12 2.69 5.66 5.66a8 8 0 1 1-11.31 0z"/>
    </svg>
  )
)

Droplet.displayName = 'Droplet'

export { Droplet }
export type { DropletProps }
