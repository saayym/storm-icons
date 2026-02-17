import { forwardRef } from 'react'

interface RocketProps extends React.SVGProps<SVGSVGElement> {}

const Rocket = forwardRef<SVGSVGElement, RocketProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3 6.36-6.36a7.5 7.5 0 0 1 5.7-2.13c.13 1.94-.59 4.03-2.13 5.7z"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="m12 15-3-3 6.36-6.36a7.5 7.5 0 0 1 5.7-2.13 7.5 7.5 0 0 1-2.13 5.7z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
    </svg>
  )
)

Rocket.displayName = 'Rocket'

export { Rocket }
export type { RocketProps }
