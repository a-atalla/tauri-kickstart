import { createFileRoute } from '@tanstack/solid-router'
import userGroupIcon from '../assets/icons/user-group.svg?inline'


export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {

  return (
    <div class="p-2">
      <h3 class="text-red-600 text-3xl font-bold">Welcome Home!</h3>
      <img src={userGroupIcon} alt="" class='w-8 h-8' />
    </div>
  )
}