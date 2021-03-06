import React from 'react'


export default class Adder extends React.Component {
        
        state = {
            error:undefined
        }

    // constructor(props){
    //     super(props)
    //     this.addOption=this.addOption.bind(this)
    //     this.state= {
    //         error:undefined
    //     }
    // }
    
    addOption = (e) => {
    
        e.preventDefault()
        const text= e.target.elements.option.value.trim() // great solution for white spaces (trim method)
        const error = this.props.addOption(text) // function returns undefined if will not pass the conditions 

        this.setState(()=>({error}))
         
        !error ? e.target.elements.option.value= '' : ''
    }

    render() {
        return (
        <div className='add-option'>
            {this.state.error && <p className='add-option__error'>{this.state.error}</p>}
            <form 
            className='add-option__form'
            onSubmit={this.addOption}>
                <input 
                className='add-option__input'
                type='text' name='option'/>
                <button className='button'>Add option</button>
            </form>
            </div>
        )
    }
}