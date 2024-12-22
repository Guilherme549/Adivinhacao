import styles from "./styles.module.css"

type Props = React.ComponentProps<"input"> & {
    maxLength: number
    placeholder: string
}

export function Input({  maxLength, placeholder, ...rest }: Props){
    return (
        <div className={styles.input}>
            <input 
            type="text" 
            maxLength={maxLength} 
            placeholder={placeholder}
            {...rest}
            />
        </div>
    )
}