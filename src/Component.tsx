import { forwardRef } from 'react'

interface ComponentProps extends React.SVGProps<SVGSVGElement> {}

const Component = forwardRef<SVGSVGElement, ComponentProps>(
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
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12zM12 2l3.5 3.5L12 9 8.5 5.5zm6.5 6.5L22 12l-3.5 3.5L15 12zM12 15l3.5 3.5L12 22l-3.5-3.5z"/>
    </svg>
  )
)

Component.displayName = 'Component'

export { Component }
export type { ComponentProps }
