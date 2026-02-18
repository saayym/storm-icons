import { forwardRef } from 'react'

interface TypeProps extends React.SVGProps<SVGSVGElement> {}

const Type = forwardRef<SVGSVGElement, TypeProps>(
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
      <path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/>
    </svg>
  )
)

Type.displayName = 'Type'

export { Type }
export type { TypeProps }
