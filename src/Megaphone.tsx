import { forwardRef } from 'react'

interface MegaphoneProps extends React.SVGProps<SVGSVGElement> {}

const Megaphone = forwardRef<SVGSVGElement, MegaphoneProps>(
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
      <path d="m3 11 18-5v12L3 13z"/><path d="M6 15v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3"/>
    </svg>
  )
)

Megaphone.displayName = 'Megaphone'

export { Megaphone }
export type { MegaphoneProps }
