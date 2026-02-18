import { forwardRef } from 'react'

interface SunProps extends React.SVGProps<SVGSVGElement> {}

const Sun = forwardRef<SVGSVGElement, SunProps>(
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
      <circle cx="12" cy="12" r="5"/><path d="M12 3v2"/><path d="M12 19v2"/><path d="M21 12h-2"/><path d="M5 12H3"/><path d="m18.36 5.64-1.41 1.41"/><path d="m7.05 16.95-1.41 1.41"/><path d="m18.36 18.36-1.41-1.41"/><path d="M7.05 7.05 5.64 5.64"/>
    </svg>
  )
)

Sun.displayName = 'Sun'

export { Sun }
export type { SunProps }
