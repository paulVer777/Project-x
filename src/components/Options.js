
import React from 'react'
import Option from './Option'

const  Options = (props) => 

    (
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__title'>Your options</h3>
        <button 
        className='button button--link'
        onClick={props.removeAll}>Remove All</button>
       </div>
       {props.data.length === 0 && <p className='widget-message'>There is no options available</p>}
       {
        props.data.map((value,index) => <Option 
        
        removeItem={props.removeItem}
        key={value} text={value}/>)
        }
        
        </div>
    )



export default Options