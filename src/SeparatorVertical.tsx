import { forwardRef } from 'react'

interface SeparatorVerticalProps extends React.SVGProps<SVGSVGElement> {}

const SeparatorVertical = forwardRef<SVGSVGElement, SeparatorVerticalProps>(
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
      <path d="M12 3v18"/><path d="m8 8-4 4 4 4"/><path d="m16 16 4-4-4-4"/>
    </svg>
  )
)

SeparatorVertical.displayName = 'SeparatorVertical'

export { SeparatorVertical }
export type { SeparatorVerticalProps }
