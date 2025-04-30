import { createRootRoute, Link, Outlet } from "@tanstack/solid-router";
import { TanStackRouterDevtools } from "@tanstack/solid-router-devtools";
import Sidebar from "../components/sidebar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Sidebar />
      <main class="flex-1 bg-stone-100 h-full overflow-y-auto rounded-sm shadow">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
