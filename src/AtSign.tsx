import { forwardRef } from 'react'

interface AtSignProps extends React.SVGProps<SVGSVGElement> {}

const AtSign = forwardRef<SVGSVGElement, AtSignProps>(
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
      <circle cx="12" cy="12" r="4"/><path d="M16 8v5c0 1.66 1.34 3 3 3 1.5 0 2-1 2-2.5V12a9 9 0 1 0-9 9c2.12 0 4.07-.82 5.5-2.18"/>
    </svg>
  )
)

AtSign.displayName = 'AtSign'

export { AtSign }
export type { AtSignProps }
