import { forwardRef } from 'react'

interface MicProps extends React.SVGProps<SVGSVGElement> {}

const Mic = forwardRef<SVGSVGElement, MicProps>(
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
      <rect x="9" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="3"/><rect x="9" y="2" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v4"/><path d="M8 23h8"/>
    </svg>
  )
)

Mic.displayName = 'Mic'

export { Mic }
export type { MicProps }
