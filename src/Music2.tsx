import { forwardRef } from 'react'

interface Music2Props extends React.SVGProps<SVGSVGElement> {}

const Music2 = forwardRef<SVGSVGElement, Music2Props>(
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
      <circle cx="8" cy="18" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/>
    </svg>
  )
)

Music2.displayName = 'Music2'

export { Music2 }
export type { Music2Props }
