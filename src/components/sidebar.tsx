import { Link } from "@tanstack/solid-router";
import userGroupIcon from "../assets/icons/user-group.svg?inline";

export default function Sidebar() {
  return (
    <aside class="w-[200px] overflow-y-auto sticky top-4 h-[calc(100vh-32px)]">
      <div class="flex items-center  justify-center">
        <a href="/" class=" text-xl font-bold">
          <span class="text-center">Tauri Kickstart</span>
        </a>
      </div>
      <nav class="flex flex-col mt-8">
        <SidebarLink label="Home" href="/" iconUrl={userGroupIcon} />
        <SidebarLink label="About" href="/about" iconUrl={userGroupIcon} />
      </nav>
    </aside>
  );
}

function SidebarLink(props) {
  return (
    <Link to={props.href} class="flex [&.active]:font-bold">
      <img src={props.iconUrl} alt="" class="w-8 h-8" />
      {props.label}
    </Link>
  );
}
