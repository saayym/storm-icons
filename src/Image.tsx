import { forwardRef } from 'react'

interface ImageProps extends React.SVGProps<SVGSVGElement> {}

const Image = forwardRef<SVGSVGElement, ImageProps>(
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
      <path d="M3 3h18v18H3z"/><circle cx="8" cy="8" r="1.5"/><path d="m21 15-5-5L5 21"/>
    </svg>
  )
)

Image.displayName = 'Image'

export { Image }
export type { ImageProps }
