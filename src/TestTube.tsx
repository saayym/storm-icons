import { forwardRef } from 'react'

interface TestTubeProps extends React.SVGProps<SVGSVGElement> {}

const TestTube = forwardRef<SVGSVGElement, TestTubeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8 3h8v10l-4 8-4-8z"/><path d="M8 3h8v10l-4 8-4-8z"/><path d="M8 10h8"/>
    </svg>
  )
)

TestTube.displayName = 'TestTube'

export { TestTube }
export type { TestTubeProps }
