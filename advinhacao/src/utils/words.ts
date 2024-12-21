export type Challenge = {
    id: number
    word: string
    tip: string
}

export const WORDS: Challenge[] = [
    { id: 1, word: "CSS", tip: "Liguagem de estilos"},
    { id: 2, word: "REACT", tip: "Biblioteca para criar interface Web" },
    { id: 3, word: "HTML", tip: "Liguagem de marcação "},
    { id: 4, word: "Javascript", tip: "Uma das linguagens de programação mais ultilizadas no mundo"},
    { id: 4, word: "Typescript", tip: "Para adicionar tipagem no Javascript"},
]