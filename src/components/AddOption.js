import React from 'react'


export default class Adder extends React.Component {
        
    constructor(props){
        super(props)
        this.addOption=this.addOption.bind(this)
        this.state= {
            error:undefined
        }
    }
    addOption(e){
    
        console.log('hh')
        e.preventDefault()
        const text= e.target.elements.option.value.trim() // great solution for white spaces (trim method)
        const error = this.props.addOption(text) // function returns undefined if will not pass the conditions 

        this.setState(()=>({error}))
         
        !error ? e.target.elements.option.value= '' : ''
    }

    render() {
        return (
        <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.addOption}>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
            </div>
        )
    }
}