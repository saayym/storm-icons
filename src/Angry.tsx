import { forwardRef } from 'react'

interface AngryProps extends React.SVGProps<SVGSVGElement> {}

const Angry = forwardRef<SVGSVGElement, AngryProps>(
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
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><path d="M7.5 8 10 9.5"/><path d="M16.5 8 14 9.5"/>
    </svg>
  )
)

Angry.displayName = 'Angry'

export { Angry }
export type { AngryProps }
