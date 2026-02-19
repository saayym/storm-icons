import { forwardRef } from 'react'

interface PaletteProps extends React.SVGProps<SVGSVGElement> {}

const Palette = forwardRef<SVGSVGElement, PaletteProps>(
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
      <circle cx="12" cy="12" r="10"/><circle cx="8" cy="9" r="1.5"/><circle cx="12" cy="7" r="1.5"/><circle cx="16" cy="9" r="1.5"/><circle cx="8" cy="14" r="1.5"/><path d="M15.5 13a2.5 2.5 0 0 1 2.5 2.5c0 2-3 3-5.5 3s-3-1-3-2.5 1.5-2 3-2"/>
    </svg>
  )
)

Palette.displayName = 'Palette'

export { Palette }
export type { PaletteProps }
