import { forwardRef } from 'react'

interface LoaderProps extends React.SVGProps<SVGSVGElement> {}

const Loader = forwardRef<SVGSVGElement, LoaderProps>(
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
      <path d="M12 2v4"/><path d="m18.4 5.6-2.5 2.5"/><path d="M22 12h-4"/><path d="m18.4 18.4-2-2"/><path d="M12 22v-3"/><path d="m5.6 18.4 1.5-1.5"/><path d="M2 12h3"/><path d="m5.6 5.6 1 1"/>
    </svg>
  )
)

Loader.displayName = 'Loader'

export { Loader }
export type { LoaderProps }
