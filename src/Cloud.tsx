import { forwardRef } from 'react'

interface CloudProps extends React.SVGProps<SVGSVGElement> {}

const Cloud = forwardRef<SVGSVGElement, CloudProps>(
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
      <path d="M6 19h12a5 5 0 0 0 1-9.9 7 7 0 0 0-13.6 2.8A4 4 0 0 0 6 19z"/>
    </svg>
  )
)

Cloud.displayName = 'Cloud'

export { Cloud }
export type { CloudProps }
