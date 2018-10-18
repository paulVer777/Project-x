import React from 'react'


const Option = (props) => 

     (
        <div>
        <span>{props.text} </span>
        <button 
        className='button button--link'
        onClick={(e) => props.removeItem(props.text)} > Remove 
        </button>
        </div>
    )


export default Option