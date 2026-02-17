import { forwardRef } from 'react'

interface CpuProps extends React.SVGProps<SVGSVGElement> {}

const Cpu = forwardRef<SVGSVGElement, CpuProps>(
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
      <rect x="4" y="4" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="4" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/>
    </svg>
  )
)

Cpu.displayName = 'Cpu'

export { Cpu }
export type { CpuProps }
