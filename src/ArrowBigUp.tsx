import { forwardRef } from 'react'

interface ArrowBigUpProps extends React.SVGProps<SVGSVGElement> {}

const ArrowBigUp = forwardRef<SVGSVGElement, ArrowBigUpProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M9 21v-9H5l7-10 7 10h-4v9z"/><path d="M9 21v-9H5l7-10 7 10h-4v9z"/>
    </svg>
  )
)

ArrowBigUp.displayName = 'ArrowBigUp'

export { ArrowBigUp }
export type { ArrowBigUpProps }
