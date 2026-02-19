import { forwardRef } from 'react'

interface WandOffProps extends React.SVGProps<SVGSVGElement> {}

const WandOff = forwardRef<SVGSVGElement, WandOffProps>(
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
      <path d="M10.5 10.5 3 18l3 3 7.5-7.5m2-2L21 6l-3-3-5.5 5.5"/><path d="m15 6 3 3"/><path d="M8.433 4.395C8.783 4.035 9 3.543 9 3a2 2 0 0 0 2 2c-.554 0-1.055.225-1.417.589"/><path d="M18.418 14.41c.36-.36.582-.86.582-1.41a2 2 0 0 0 2 2c-.555 0-1.056.226-1.419.59"/><path d="m3 3 18 18"/>
    </svg>
  )
)

WandOff.displayName = 'WandOff'

export { WandOff }
export type { WandOffProps }
