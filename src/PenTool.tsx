import { forwardRef } from 'react'

interface PenToolProps extends React.SVGProps<SVGSVGElement> {}

const PenTool = forwardRef<SVGSVGElement, PenToolProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 19 7-7 3 3-7 7z"/><path d="m12 19 7-7 3 3-7 7z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>
    </svg>
  )
)

PenTool.displayName = 'PenTool'

export { PenTool }
export type { PenToolProps }
