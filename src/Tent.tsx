import { forwardRef } from 'react'

interface TentProps extends React.SVGProps<SVGSVGElement> {}

const Tent = forwardRef<SVGSVGElement, TentProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 21 9-18 9 18z"/><path d="m3 21 9-18 9 18z"/><path d="M12 3v18"/><path d="m12 21-4-7"/><path d="m12 21 4-7"/>
    </svg>
  )
)

Tent.displayName = 'Tent'

export { Tent }
export type { TentProps }
