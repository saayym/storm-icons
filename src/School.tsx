import { forwardRef } from 'react'

interface SchoolProps extends React.SVGProps<SVGSVGElement> {}

const School = forwardRef<SVGSVGElement, SchoolProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m2 10 10-6 10 6-10 6z"/><path d="M22 10 12 4 2 10l10 6z"/><path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5"/><path d="M22 10v7"/>
    </svg>
  )
)

School.displayName = 'School'

export { School }
export type { SchoolProps }
