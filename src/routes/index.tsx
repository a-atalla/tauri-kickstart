import { createFileRoute } from '@tanstack/solid-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div class="p-2">
      <h3 class="text-red-600 text-3xl font-bold">Welcome Home!</h3>
    </div>
  )
}