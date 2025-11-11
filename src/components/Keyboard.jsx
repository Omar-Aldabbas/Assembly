

export const Keyboard = (props) => {

    const keys = "abcdefghijklmnopqrstuvwxyz"

    const keyboard = keys.split('').map(key => (
        <button onClick={() => props.select(key)} key={key} aria-label={`letter ${key}`} >{key.toUpperCase()}</button>
    ))

    return (
        <section className='keyboard'>
            {keyboard}

        </section>
    )
}