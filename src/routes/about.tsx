import {createFileRoute} from '@tanstack/solid-router'
import Button from "../components/button.tsx";

export const Route = createFileRoute('/about')({
    component: About,
})

function About() {
    return <div class="p-2">
        Hello from About!
        <br/>
        <Button label="Click Me!"
                onClick={() => console.log('Clicked!')}/>
    </div>
}