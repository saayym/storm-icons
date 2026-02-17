import { forwardRef } from 'react'

interface HomeProps extends React.SVGProps<SVGSVGElement> {}

const Home = forwardRef<SVGSVGElement, HomeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 12v8l2 2h10l2-2v-8l-7-9z"/><path d="m3 12 9-9 9 9"/><path d="M5 12v8l2 2h10l2-2v-8"/><path d="M3 12h18"/><path d="M10 22v-5h4v5"/>
    </svg>
  )
)

Home.displayName = 'Home'

export { Home }
export type { HomeProps }
