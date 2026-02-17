import { forwardRef } from 'react'

interface BriefcaseProps extends React.SVGProps<SVGSVGElement> {}

const Briefcase = forwardRef<SVGSVGElement, BriefcaseProps>(
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
      <rect x="2" y="7" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="7" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M2 13h20"/>
    </svg>
  )
)

Briefcase.displayName = 'Briefcase'

export { Briefcase }
export type { BriefcaseProps }
