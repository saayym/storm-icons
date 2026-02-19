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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="1"/><path d="M2 8h20"/><path d="M6 4v4"/><path d="M10 4v4"/><path d="M14 4v4"/>
    </svg>
  )
)

Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
