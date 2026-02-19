import { forwardRef } from 'react'

interface XSocialProps extends React.SVGProps<SVGSVGElement> {}

const XSocial = forwardRef<SVGSVGElement, XSocialProps>(
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
      <path d="m3 3 7.07 9.65L3.34 21h1.67l5.9-7.3L15.5 21H21l-7.42-10.12L19.82 3H18.2l-5.53 6.84L8.5 3z"/>
    </svg>
  )
)

XSocial.displayName = 'XSocial'

export { XSocial }
export type { XSocialProps }
