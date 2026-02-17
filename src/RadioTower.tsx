import { forwardRef } from 'react'

interface RadioTowerProps extends React.SVGProps<SVGSVGElement> {}

const RadioTower = forwardRef<SVGSVGElement, RadioTowerProps>(
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
      <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9m14.2 0c3.9 3.9 3.9 10.3 0 14.2"/><path d="M7.8 13.2c-2.3-2.3-2.3-6.1 0-8.5m8.4.1c2.3 2.3 2.3 6.1 0 8.5"/><circle cx="12" cy="9" r="1"/><path d="M12 10v12"/><path d="M8 22h8"/>
    </svg>
  )
)

RadioTower.displayName = 'RadioTower'

export { RadioTower }
export type { RadioTowerProps }
