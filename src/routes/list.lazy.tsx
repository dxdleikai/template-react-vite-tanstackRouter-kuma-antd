import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/list')({
  component: About,
})

function About() {
  return <div className="p-2">Hello from list!</div>
}
