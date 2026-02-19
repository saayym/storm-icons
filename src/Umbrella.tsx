import { forwardRef } from 'react'

interface UmbrellaProps extends React.SVGProps<SVGSVGElement> {}

const Umbrella = forwardRef<SVGSVGElement, UmbrellaProps>(
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
      <path d="M4 12a8 8 0 0 1 16 0z"/><path d="M12 12v6a2 2 0 0 0 4 0"/>
    </svg>
  )
)

Umbrella.displayName = 'Umbrella'

export { Umbrella }
export type { UmbrellaProps }
