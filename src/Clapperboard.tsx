import { forwardRef } from 'react'

interface ClapperboardProps extends React.SVGProps<SVGSVGElement> {}

const Clapperboard = forwardRef<SVGSVGElement, ClapperboardProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 11h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M4 11V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7"/><path d="M4 11h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="m8 2 3 9m3-9 3 9"/>
    </svg>
  )
)

Clapperboard.displayName = 'Clapperboard'

export { Clapperboard }
export type { ClapperboardProps }
