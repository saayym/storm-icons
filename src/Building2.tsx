import { forwardRef } from 'react'

interface Building2Props extends React.SVGProps<SVGSVGElement> {}

const Building2 = forwardRef<SVGSVGElement, Building2Props>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M1 2h14v20H1z"/><path d="M1 2h14v20H1z"/><path d="M15 14h4a2 2 0 0 1 2 2v6h-6z"/><path d="M5 6h3v3H5z"/><path d="M9 6h3v3H9z"/><path d="M5 12h3v3H5z"/><path d="M9 12h3v3H9z"/>
    </svg>
  )
)

Building2.displayName = 'Building2'

export { Building2 }
export type { Building2Props }
