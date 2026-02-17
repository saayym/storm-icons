import { forwardRef } from 'react'

interface PlugOffProps extends React.SVGProps<SVGSVGElement> {}

const PlugOff = forwardRef<SVGSVGElement, PlugOffProps>(
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
      <path d="m2 2 20 20"/><path d="M12 22v-5"/><path d="M9 8V3m6 5V3"/><path d="M18 8v2a6 6 0 0 1-6 6"/><path d="M6 8h12"/>
    </svg>
  )
)

PlugOff.displayName = 'PlugOff'

export { PlugOff }
export type { PlugOffProps }
