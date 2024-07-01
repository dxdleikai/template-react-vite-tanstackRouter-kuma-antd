import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/apply')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from apply!</div>
}
