import { forwardRef } from 'react'

interface TelegramProps extends React.SVGProps<SVGSVGElement> {}

const Telegram = forwardRef<SVGSVGElement, TelegramProps>(
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
      <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"/>
    </svg>
  )
)

Telegram.displayName = 'Telegram'

export { Telegram }
export type { TelegramProps }
