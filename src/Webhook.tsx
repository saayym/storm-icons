import { forwardRef } from 'react'

interface WebhookProps extends React.SVGProps<SVGSVGElement> {}

const Webhook = forwardRef<SVGSVGElement, WebhookProps>(
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
      <path d="M18 16.98h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-4 0"/><path d="M14 7.98h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 4 0"/><path d="M6 16.98H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 4 0"/><circle cx="12" cy="18" r="2"/><circle cx="18" cy="12" r="2"/><circle cx="6" cy="12" r="2"/>
    </svg>
  )
)

Webhook.displayName = 'Webhook'

export { Webhook }
export type { WebhookProps }
