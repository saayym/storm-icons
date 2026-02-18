import { forwardRef } from 'react'

interface InfoProps extends React.SVGProps<SVGSVGElement> {}

const Info = forwardRef<SVGSVGElement, InfoProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
    </svg>
  )
)

Info.displayName = 'Info'

export { Info }
export type { InfoProps }
