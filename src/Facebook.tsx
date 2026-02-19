import { forwardRef } from 'react'

interface FacebookProps extends React.SVGProps<SVGSVGElement> {}

const Facebook = forwardRef<SVGSVGElement, FacebookProps>(
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
      <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"/>
    </svg>
  )
)

Facebook.displayName = 'Facebook'

export { Facebook }
export type { FacebookProps }
