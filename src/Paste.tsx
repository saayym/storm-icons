import { forwardRef } from 'react'

interface PasteProps extends React.SVGProps<SVGSVGElement> {}

const Paste = forwardRef<SVGSVGElement, PasteProps>(
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
      <rect x="8" y="8" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" rx="1"/>
    </svg>
  )
)

Paste.displayName = 'Paste'

export { Paste }
export type { PasteProps }
