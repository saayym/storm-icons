import { forwardRef } from 'react'

interface GiftProps extends React.SVGProps<SVGSVGElement> {}

const Gift = forwardRef<SVGSVGElement, GiftProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 8h18v4H3z"/><path d="M3 8h18v4H3z"/><path d="M3 12v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8"/><path d="M12 8v14"/><path d="M12 8a4 4 0 0 0-4-4c-1.5 0-3 .8-3 3s2 3 3 3h4"/><path d="M12 8a4 4 0 0 1 4-4c1.5 0 3 .8 3 3s-2 3-3 3h-4"/>
    </svg>
  )
)

Gift.displayName = 'Gift'

export { Gift }
export type { GiftProps }
