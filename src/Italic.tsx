import { forwardRef } from 'react'

interface ItalicProps extends React.SVGProps<SVGSVGElement> {}

const Italic = forwardRef<SVGSVGElement, ItalicProps>(
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
      <path d="M11 5h6"/><path d="M7 19h6"/><path d="m14 5-4 14"/>
    </svg>
  )
)

Italic.displayName = 'Italic'

export { Italic }
export type { ItalicProps }
