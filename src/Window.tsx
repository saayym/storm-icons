import { forwardRef } from 'react'

interface WindowProps extends React.SVGProps<SVGSVGElement> {}

const Window = forwardRef<SVGSVGElement, WindowProps>(
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
      <rect x="2" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="3" rx="2"/><path d="M2 9h20"/><circle cx="6" cy="6" r="1"/><circle cx="10" cy="6" r="1"/>
    </svg>
  )
)

Window.displayName = 'Window'

export { Window }
export type { WindowProps }
