import { forwardRef } from 'react'

interface ArrowBigRightProps extends React.SVGProps<SVGSVGElement> {}

const ArrowBigRight = forwardRef<SVGSVGElement, ArrowBigRightProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 9h9V5l10 7-10 7v-4H3z"/><path d="M3 9h9V5l10 7-10 7v-4H3z"/>
    </svg>
  )
)

ArrowBigRight.displayName = 'ArrowBigRight'

export { ArrowBigRight }
export type { ArrowBigRightProps }
