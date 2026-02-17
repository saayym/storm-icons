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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 4h-9"/><path d="M14 20H5"/><path d="M15 4 9 20"/>
    </svg>
  )
)

Italic.displayName = 'Italic'

export { Italic }
export type { ItalicProps }
