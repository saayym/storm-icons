import { forwardRef } from 'react'

interface SlidersProps extends React.SVGProps<SVGSVGElement> {}

const Sliders = forwardRef<SVGSVGElement, SlidersProps>(
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
      <path d="M6 3v18"/><path d="M12 3v18"/><path d="M18 3v18"/><path d="M4 8h4"/><path d="M10 15h4"/><path d="M16 10h4"/>
    </svg>
  )
)

Sliders.displayName = 'Sliders'

export { Sliders }
export type { SlidersProps }
