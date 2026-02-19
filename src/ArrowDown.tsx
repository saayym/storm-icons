import { forwardRef } from 'react'

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {}

const ArrowDown = forwardRef<SVGSVGElement, ArrowDownProps>(
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
      <path d="M12 5v14"/><path d="m18 13-6 6"/><path d="m6 13 6 6"/>
    </svg>
  )
)

ArrowDown.displayName = 'ArrowDown'

export { ArrowDown }
export type { ArrowDownProps }
