import { forwardRef } from 'react'

interface BuildingProps extends React.SVGProps<SVGSVGElement> {}

const Building = forwardRef<SVGSVGElement, BuildingProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 2h18v20H3z"/><path d="M3 2h18v20H3z"/><path d="M9 22v-4"/><path d="M15 22v-4"/><path d="M7 6h3v3H7z"/><path d="M14 6h3v3h-3z"/><path d="M7 12h3v3H7z"/><path d="M14 12h3v3h-3z"/>
    </svg>
  )
)

Building.displayName = 'Building'

export { Building }
export type { BuildingProps }
