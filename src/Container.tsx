import { forwardRef } from 'react'

interface ContainerProps extends React.SVGProps<SVGSVGElement> {}

const Container = forwardRef<SVGSVGElement, ContainerProps>(
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
      <rect x="2" y="4" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="4" rx="2"/><path d="M2 8h20"/><path d="M6 6h.01"/><path d="M10 6h.01"/>
    </svg>
  )
)

Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
