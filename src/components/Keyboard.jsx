import { cn } from "../lib/utils"


export const Keyboard = (props) => {

    const selected = props.selected
    const wordLetters = props.word.split('');

    

    const keys = "abcdefghijklmnopqrstuvwxyz"

    const keyboard = keys.split('').map(key => (
        <button className={cn( !selected.includes(key) ? '' : wordLetters.includes(key.toUpperCase()) ? 'correct' : 'wrong')}  onClick={() => props.select(key)} key={key} aria-label={`letter ${key}`} >{key.toUpperCase()}</button>
    ))

    return (
        <section className='keyboard'>
            {keyboard}

        </section>
    )
}