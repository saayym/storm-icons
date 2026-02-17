import { forwardRef } from 'react'

interface SyringeProps extends React.SVGProps<SVGSVGElement> {}

const Syringe = forwardRef<SVGSVGElement, SyringeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m18 2 4 4-10 10H8v-4z"/><path d="m18 2 4 4-10 10H8v-4z"/><path d="m2 22 6-6"/><path d="m11 9 4 4"/>
    </svg>
  )
)

Syringe.displayName = 'Syringe'

export { Syringe }
export type { SyringeProps }
