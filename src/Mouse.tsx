import { forwardRef } from 'react'

interface MouseProps extends React.SVGProps<SVGSVGElement> {}

const Mouse = forwardRef<SVGSVGElement, MouseProps>(
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
      <rect x="6" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="6"/><rect x="6" y="2" rx="6"/><path d="M12 6v4"/><path d="M12 2v.01"/>
    </svg>
  )
)

Mouse.displayName = 'Mouse'

export { Mouse }
export type { MouseProps }
