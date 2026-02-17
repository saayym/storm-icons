import { forwardRef } from 'react'

interface Table2Props extends React.SVGProps<SVGSVGElement> {}

const Table2 = forwardRef<SVGSVGElement, Table2Props>(
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
      <rect x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M12 3v18"/>
    </svg>
  )
)

Table2.displayName = 'Table2'

export { Table2 }
export type { Table2Props }
