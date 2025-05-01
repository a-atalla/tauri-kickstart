/* @refresh reload */
// Supports weights 100-900
import '@fontsource-variable/inter';
import "./main.css"
import {render} from "solid-js/web";
import {createRouter, RouterProvider} from '@tanstack/solid-router'

// Import the generated route tree
import {routeTree} from './routeTree.gen'

// Create a new router instance
const router = createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/solid-router' {
    interface Register {
        router: typeof router
    }
}

// Render the app
const rootElement = document.getElementsByTagName("body")[0]

render(() => <RouterProvider router={router}/>, rootElement)
if (!rootElement.innerHTML) {
}