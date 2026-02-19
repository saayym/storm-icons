import { forwardRef } from 'react'

interface InstagramProps extends React.SVGProps<SVGSVGElement> {}

const Instagram = forwardRef<SVGSVGElement, InstagramProps>(
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
      <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/><path d="M16.5 7.5v.01"/>
    </svg>
  )
)

Instagram.displayName = 'Instagram'

export { Instagram }
export type { InstagramProps }
