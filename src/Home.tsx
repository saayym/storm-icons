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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m3 12 9-8 9 8"/><path d="M5 11v9h14v-9"/>
    </svg>
  )
)

Home.displayName = 'Home'

export { Home }
export type { HomeProps }
