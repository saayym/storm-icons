import { forwardRef } from 'react'

interface StampProps extends React.SVGProps<SVGSVGElement> {}

const Stamp = forwardRef<SVGSVGElement, StampProps>(
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
      <path d="M5 22h14"/><path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17h16v-1.5a2.5 2.5 0 0 0-.73-1.77"/><path d="M14 13V8.5c0-1.5 1-3 0-4.5s-3-1.5-4 0 0 3 0 4.5V13"/>
    </svg>
  )
)

Stamp.displayName = 'Stamp'

export { Stamp }
export type { StampProps }
