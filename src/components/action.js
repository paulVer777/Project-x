import React from 'react'

const Action = (props) =>

   (
        <div>
            <button className='big-button' 
            disabled={!props.isAnyOption} onClick={props.optionPicker}>What should i do?
            </button>
        </div>
    )


export default Action