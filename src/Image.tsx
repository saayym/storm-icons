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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="3" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>
    </svg>
  )
)

Image.displayName = 'Image'

export { Image }
export type { ImageProps }
