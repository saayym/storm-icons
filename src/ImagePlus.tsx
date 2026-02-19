import { forwardRef } from 'react'

interface ImagePlusProps extends React.SVGProps<SVGSVGElement> {}

const ImagePlus = forwardRef<SVGSVGElement, ImagePlusProps>(
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
      <path d="M15 8h.01"/><path d="M12.5 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6.5"/><path d="m3 16 5-5c.928-.893 2.072-.893 3 0l4 4"/><path d="m14 14 1-1c.67-.644 1.45-.824 2.182-.54"/><path d="M16 19h6"/><path d="M19 16v6"/>
    </svg>
  )
)

ImagePlus.displayName = 'ImagePlus'

export { ImagePlus }
export type { ImagePlusProps }
