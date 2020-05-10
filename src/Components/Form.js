import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder='Type City Name' />
            <button>Find</button>
        </form>
    )
}


export default Form