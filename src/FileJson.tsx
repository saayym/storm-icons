import { forwardRef } from 'react'

interface FileJsonProps extends React.SVGProps<SVGSVGElement> {}

const FileJson = forwardRef<SVGSVGElement, FileJsonProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 12H8c-1 0-2 .5-2 1.5S7 15 8 15s2 .5 2 1.5S9 18 8 18H6"/><path d="M16 12h-2c-1 0-2 .5-2 1.5s1 1.5 2 1.5 2 .5 2 1.5-1 1.5-2 1.5h-2"/>
    </svg>
  )
)

FileJson.displayName = 'FileJson'

export { FileJson }
export type { FileJsonProps }
