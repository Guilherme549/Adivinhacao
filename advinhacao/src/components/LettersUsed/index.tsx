import styles from "./styles.module.css"
import { Letter } from "../Letter"

export function LettersUsed(){
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras Ultilizadas</h5>

            <div>
                <Letter value="X" size="small" color="correct"/>
                <Letter value="V"size="small" color="wrong"/>
                <Letter value="I"/>
                <Letter value="D"/>
                <Letter value="E"/>
                <Letter value="O"/>
                <Letter value="S"/>
            </div>
        </div>
    )
}