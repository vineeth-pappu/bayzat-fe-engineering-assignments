import { HTMLAttributes } from "react";

export interface IAppButtonProps extends HTMLAttributes<HTMLButtonElement> {
    label: string;
}


export default function AppButton(props: IAppButtonProps) {

    const { label } = props

    return (
        <button {...props} >
            {label}
        </button>
    )
}