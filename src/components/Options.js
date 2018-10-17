
import React from 'react'
import Option from './Option'

const  Options = (props) => 

    (
        <div>
        <button onClick={props.removeAll}>Remove All</button>
        {
        props.data.map((value,index) => <Option 
        
        removeItem={props.removeItem}
        key={value} text={value}/>)
        }
        {props.data.length === 0 && <p>There is no options available</p>}
        </div>
    )



export default Options