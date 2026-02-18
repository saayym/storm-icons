import { forwardRef } from 'react'

interface PlayProps extends React.SVGProps<SVGSVGElement> {}

const Play = forwardRef<SVGSVGElement, PlayProps>(
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
      <path d="M6 3v18l14-9z"/>
    </svg>
  )
)

Play.displayName = 'Play'

export { Play }
export type { PlayProps }
