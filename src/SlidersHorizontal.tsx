import { forwardRef } from 'react'

interface SlidersHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const SlidersHorizontal = forwardRef<SVGSVGElement, SlidersHorizontalProps>(
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
      <path d="M21 4h-7"/><path d="M10 4H3"/><path d="M21 12h-9"/><path d="M8 12H3"/><path d="M21 20h-5"/><path d="M12 20H3"/><path d="M14 1v6"/><path d="M8 9v6"/><path d="M16 17v6"/>
    </svg>
  )
)

SlidersHorizontal.displayName = 'SlidersHorizontal'

export { SlidersHorizontal }
export type { SlidersHorizontalProps }
