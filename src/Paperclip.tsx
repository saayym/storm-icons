import { forwardRef } from 'react'

interface PaperclipProps extends React.SVGProps<SVGSVGElement> {}

const Paperclip = forwardRef<SVGSVGElement, PaperclipProps>(
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
      <path d="M16.5 6.5 8 15c-1.1 1.1-1.1 2.9 0 4s2.9 1.1 4 0l8-8a4.237 4.237 0 0 0 0-6 4.237 4.237 0 0 0-6 0l-8 8a5.655 5.655 0 0 0 0 8"/>
    </svg>
  )
)

Paperclip.displayName = 'Paperclip'

export { Paperclip }
export type { PaperclipProps }
