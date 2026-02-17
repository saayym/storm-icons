import { forwardRef } from 'react'

interface LaptopProps extends React.SVGProps<SVGSVGElement> {}

const Laptop = forwardRef<SVGSVGElement, LaptopProps>(
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
      <rect x="3" y="4" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="4" rx="2"/><path d="M2 20h20"/>
    </svg>
  )
)

Laptop.displayName = 'Laptop'

export { Laptop }
export type { LaptopProps }
