import { forwardRef } from 'react'

interface WandProps extends React.SVGProps<SVGSVGElement> {}

const Wand = forwardRef<SVGSVGElement, WandProps>(
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
      <path d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-1.2-6.8L19 5m-6.8 6.8L11 13m1.2-6.8L11 5"/><path d="m2 22 11-11"/>
    </svg>
  )
)

Wand.displayName = 'Wand'

export { Wand }
export type { WandProps }
