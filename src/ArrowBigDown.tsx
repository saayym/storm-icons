import { forwardRef } from 'react'

interface ArrowBigDownProps extends React.SVGProps<SVGSVGElement> {}

const ArrowBigDown = forwardRef<SVGSVGElement, ArrowBigDownProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M15 3v9h4l-7 10-7-10h4V3z"/><path d="M15 3v9h4l-7 10-7-10h4V3z"/>
    </svg>
  )
)

ArrowBigDown.displayName = 'ArrowBigDown'

export { ArrowBigDown }
export type { ArrowBigDownProps }
