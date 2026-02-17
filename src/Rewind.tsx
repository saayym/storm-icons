import { forwardRef } from 'react'

interface RewindProps extends React.SVGProps<SVGSVGElement> {}

const Rewind = forwardRef<SVGSVGElement, RewindProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m11 19-9-7 9-7z"/><path d="m11 19-9-7 9-7z"/><path fill="currentColor" fillOpacity=".15" stroke="none" d="m22 19-9-7 9-7z"/><path d="m22 19-9-7 9-7z"/>
    </svg>
  )
)

Rewind.displayName = 'Rewind'

export { Rewind }
export type { RewindProps }
