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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 2 2 7l10 5 10-5z"/><path d="M12 2 2 7l10 5 10-5z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/>
    </svg>
  )
)

Layers.displayName = 'Layers'

export { Layers }
export type { LayersProps }
