import { Link } from "@tanstack/solid-router";
import circleStackIcon from "../assets/icons/circle-stack.svg";
import cubeIcon from "../assets/icons/cube.svg";

export default function Sidebar() {
  return (
    <aside class="w-[200px] overflow-y-auto sticky top-4 h-[calc(100vh-32px)]">
      <div class="flex items-center  justify-center">
        <div class=" text-xl font-bold">
          <span class="text-center">Tauri Kickstart</span>
        </div>
      </div>
      <nav class="flex flex-col mt-8">
        <SidebarLink label="Dashboard" href="/" iconUrl={cubeIcon} />
        <SidebarLink label="About" href="/about" iconUrl={circleStackIcon} />
      </nav>
    </aside>
  );
}

type Props = {
  href: string;
  iconUrl: string;
  label: string;
};

function SidebarLink(props: Props) {
  return (
    <Link
      to={props.href}
      class="flex gap-2 [&.active]:bg-stone-300 hover:bg-stone-300 p-2"
    >
      <img src={props.iconUrl} alt="" class="w-6 h-6" />
      {props.label}
    </Link>
  );
}
