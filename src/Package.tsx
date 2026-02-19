import { forwardRef } from 'react'

interface PackageProps extends React.SVGProps<SVGSVGElement> {}

const Package = forwardRef<SVGSVGElement, PackageProps>(
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
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m12 12 8-4.5"/><path d="M12 12v9"/><path d="M12 12 4 7.5"/><path d="m16 5.25-8 4.5"/>
    </svg>
  )
)

Package.displayName = 'Package'

export { Package }
export type { PackageProps }
