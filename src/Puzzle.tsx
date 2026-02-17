import { forwardRef } from 'react'

interface PuzzleProps extends React.SVGProps<SVGSVGElement> {}

const Puzzle = forwardRef<SVGSVGElement, PuzzleProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M19.439 7.854a2 2 0 0 1-.036-.354 4.5 4.5 0 0 0-9 0c0 .114-.016.234-.036.354M2 16.5h4.5a.5.5 0 0 1 .5.5v4.5"/><path d="M19.439 7.854a2 2 0 0 1-.036-.354 4.5 4.5 0 0 0-9 0c0 .114-.016.234-.036.354"/><path d="M3 21V10h7a1 1 0 0 0 1-1V3h7v7a1 1 0 0 0 1 1h2v10z"/>
    </svg>
  )
)

Puzzle.displayName = 'Puzzle'

export { Puzzle }
export type { PuzzleProps }
