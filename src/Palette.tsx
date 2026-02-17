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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.67 1.5-1.5 0-.38-.15-.74-.39-1.02-.23-.27-.38-.62-.38-1 0-.83.67-1.5 1.5-1.5H16a5.98 5.98 0 0 0 6-6c0-5.52-4.48-10-10-10Z"/><circle cx="12" cy="12" r="10"/><circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17" cy="10" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12" r="1.5"/>
    </svg>
  )
)

Palette.displayName = 'Palette'

export { Palette }
export type { PaletteProps }
