import { forwardRef } from 'react'

interface LayersProps extends React.SVGProps<SVGSVGElement> {}

const Layers = forwardRef<SVGSVGElement, LayersProps>(
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
      <path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>
    </svg>
  )
)

Layers.displayName = 'Layers'

export { Layers }
export type { LayersProps }
