import PropTypes from 'prop-types';

const nombre = "Adrian"

const getMessage = (nombre) => {
    return `¡Hola ${nombre}!`
}

export const FirstApp = ({greeting, name}) => {
    return (
        <>
            <h1>{getMessage(name)}</h1>
            <p>{greeting}</p>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    name: "Chewie"
}