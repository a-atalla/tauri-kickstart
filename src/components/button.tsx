import {Component} from "solid-js";

type Props = {
    label: string,
    onClick: () => void
}
const Button: Component<Props> = (props) => {
    return (
        <button
            class="bg-stone-200 hover:bg-stone-300 text-sm text-stone-900 py-1 px-4 rounded border border-stone-300 active:translate-y-[0.5px]"
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
}

export default Button;