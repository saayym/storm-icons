import { forwardRef } from 'react'

interface SnowflakeProps extends React.SVGProps<SVGSVGElement> {}

const Snowflake = forwardRef<SVGSVGElement, SnowflakeProps>(
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
      <path d="M2 12h20"/><path d="M12 2v20"/><path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4m0 16 4-4 4 4"/>
    </svg>
  )
)

Snowflake.displayName = 'Snowflake'

export { Snowflake }
export type { SnowflakeProps }
