import { forwardRef } from 'react'

interface PenProps extends React.SVGProps<SVGSVGElement> {}

const Pen = forwardRef<SVGSVGElement, PenProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m17 3 4 4L7 21H3v-4z"/><path d="m17 3 4 4L7 21H3v-4z"/>
    </svg>
  )
)

Pen.displayName = 'Pen'

export { Pen }
export type { PenProps }
