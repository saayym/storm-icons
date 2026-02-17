import { forwardRef } from 'react'

interface PointerProps extends React.SVGProps<SVGSVGElement> {}

const Pointer = forwardRef<SVGSVGElement, PointerProps>(
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
      <path d="M22 14a8 8 0 0 1-8 8h-1c-3 0-6-2-8-5l-1.5-2.5A1.5 1.5 0 0 1 6 13l2 3V4.5a1.5 1.5 0 0 1 3 0V12"/><path d="M11 5.5a1.5 1.5 0 0 1 3 0V12"/><path d="M14 6.5a1.5 1.5 0 0 1 3 0V12"/><path d="M17 7.5a1.5 1.5 0 0 1 3 0V14"/>
    </svg>
  )
)

Pointer.displayName = 'Pointer'

export { Pointer }
export type { PointerProps }
