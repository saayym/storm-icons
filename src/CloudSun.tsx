import { forwardRef } from 'react'

interface CloudSunProps extends React.SVGProps<SVGSVGElement> {}

const CloudSun = forwardRef<SVGSVGElement, CloudSunProps>(
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
      <path d="M12 2v2m-7.07.93 1.41 1.41M20 12h2m-4.34 5.66 1.41 1.41M2 12h2m2.34 5.66-1.41 1.41M17.07 4.93l1.41-1.41"/><circle cx="12" cy="10" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="10" r="4"/><path d="M16 18H7a5 5 0 1 1 .1-10A6.97 6.97 0 0 1 12 5"/>
    </svg>
  )
)

CloudSun.displayName = 'CloudSun'

export { CloudSun }
export type { CloudSunProps }
