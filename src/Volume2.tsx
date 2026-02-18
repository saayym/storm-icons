import { forwardRef } from 'react'

interface Volume2Props extends React.SVGProps<SVGSVGElement> {}

const Volume2 = forwardRef<SVGSVGElement, Volume2Props>(
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
      <path d="M3 8v8h4l6 5V3L7 8z"/><path d="M16 9.5a4 4 0 0 1 0 5"/><path d="M19 6.5a8 8 0 0 1 0 11"/>
    </svg>
  )
)

Volume2.displayName = 'Volume2'

export { Volume2 }
export type { Volume2Props }
