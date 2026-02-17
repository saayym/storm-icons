import { forwardRef } from 'react'

interface MessagesSquareProps extends React.SVGProps<SVGSVGElement> {}

const MessagesSquare = forwardRef<SVGSVGElement, MessagesSquareProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M14 9a2 2 0 0 1-2 2H6l-4 4V3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
    </svg>
  )
)

MessagesSquare.displayName = 'MessagesSquare'

export { MessagesSquare }
export type { MessagesSquareProps }
