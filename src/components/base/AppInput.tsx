import { HTMLProps } from "react";

export interface IAppInputProps extends HTMLProps<HTMLInputElement> {
    label: string;
}

export default function AppInput(props: IAppInputProps) {

    const { label = "" } = props

    return (
        <>
            {label && <label>Search Movies: </label>}
            <input {...props} />
        </>
    )
}