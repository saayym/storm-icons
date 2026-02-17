import { forwardRef } from 'react'

interface FileLockProps extends React.SVGProps<SVGSVGElement> {}

const FileLock = forwardRef<SVGSVGElement, FileLockProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><rect x="9" y="14" rx="1"/><path d="M10 14v-1a2 2 0 1 1 4 0v1"/>
    </svg>
  )
)

FileLock.displayName = 'FileLock'

export { FileLock }
export type { FileLockProps }
