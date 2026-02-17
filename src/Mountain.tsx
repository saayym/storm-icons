import { forwardRef } from 'react'

interface MountainProps extends React.SVGProps<SVGSVGElement> {}

const Mountain = forwardRef<SVGSVGElement, MountainProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m8 3 4 8 5 5v4H3v-4z"/><path d="m8 3 4 8 5 5v4H3v-4z"/><path d="m17 14 3-3 4 7H4"/>
    </svg>
  )
)

Mountain.displayName = 'Mountain'

export { Mountain }
export type { MountainProps }
