import { useState, use } from 'react'
import PropTypes from 'prop-types';



export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = (event, newValue) => {
        //console.log(event)
        //setCounter( counter + 1 )
        setCounter( (c) => c + 1 )
    }

    const handleSubstract = () => {
        setCounter( (c) => c - 1 )
    }

    const handleReset = () => {
        setCounter( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ event => handleAdd(event, "holi") } >+1</button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}