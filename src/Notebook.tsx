import { forwardRef } from 'react'

interface NotebookProps extends React.SVGProps<SVGSVGElement> {}

const Notebook = forwardRef<SVGSVGElement, NotebookProps>(
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
      <rect x="4" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="2" rx="2"/><path d="M2 8h4"/><path d="M2 12h4"/><path d="M2 16h4"/>
    </svg>
  )
)

Notebook.displayName = 'Notebook'

export { Notebook }
export type { NotebookProps }
