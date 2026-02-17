import { forwardRef } from 'react'

interface GlassesProps extends React.SVGProps<SVGSVGElement> {}

const Glasses = forwardRef<SVGSVGElement, GlassesProps>(
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
      <circle cx="6" cy="15" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="18" cy="15" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M10 15h4"/><path d="M2 15V9"/><path d="M22 15V9"/>
    </svg>
  )
)

Glasses.displayName = 'Glasses'

export { Glasses }
export type { GlassesProps }
