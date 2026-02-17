import { forwardRef } from 'react'

interface FlowerProps extends React.SVGProps<SVGSVGElement> {}

const Flower = forwardRef<SVGSVGElement, FlowerProps>(
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
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 1 0 8m0 12a4 4 0 0 1 0-8M2 12a4 4 0 0 1 8 0m12 0a4 4 0 0 1-8 0"/><path d="M5.64 5.64a4 4 0 0 1 5.66 5.66m7.06-5.66a4 4 0 0 0-5.66 5.66m5.66 7.06a4 4 0 0 1-5.66-5.66m-7.06 5.66a4 4 0 0 0 5.66-5.66"/>
    </svg>
  )
)

Flower.displayName = 'Flower'

export { Flower }
export type { FlowerProps }
