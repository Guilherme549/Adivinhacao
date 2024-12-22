import styles from "./app.module.css"

import { Header } from "./components/Header"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"
import { Button } from "./components/Button"
import { LettersUsed } from "./components/LettersUsed"

function App() {
  
  function handleRestartGame(){
    alert("Reiniciar o game")
  }

  return (
      <div className={styles.container}>
        <main>
          <Header current={5} max={10} onRestart={handleRestartGame} />
          
          <Tip tip="Uma das linguagens mais ultilizadas" />

          <div className={styles.word}>
            <Letter value="R"/> 
            <Letter value="E"/> 
            <Letter value="A"/> 
            <Letter value="C"/> 
            <Letter value="T"/> 
            
          </div>

          <h4>Palpite</h4>

          <div className={styles.guess}>
            <Button title="Confirmar"/>
          </div>

          <LettersUsed />
        </main>
      </div>
  )
}

export default App
