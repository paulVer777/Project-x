
class IndecisionApp extends React.Component {

      constructor(props){
          super(props)
          this.removeAll=this.removeAll.bind(this)
          this.optionPicker=this.optionPicker.bind(this)
          this.state={
              options:[1,2,3,4,5]
          }
      }

     removeAll(){
         this.setState(()=>({options:[]}))
     }

      optionPicker(){
          const index = Math.floor(Math.random()*this.state.options.length)
          alert(this.state.options[index])
      }

    render() {

     const title='Indecision'

       return (
           <div>
        <Header title={title}/>
        <Action 
        optionPicker={this.optionPicker}
        isAnyOption={this.state.options.length > 0}/>
        <Options 
        removeAll={this.removeAll}
        data={this.state.options}/>
        <Adder/>
           </div>
       )
    }
}

class Header extends React.Component {

    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Helpful App</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {

        return (
            <div>
                <button disabled={!this.props.isAnyOption} onClick={this.props.optionPicker}>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

         constructor(props){
          super(props)
        //    this.removeAll=this.removeAll.bind(this) // we set the desired context for removeAll in the constructor, 
           // we could do that also in the render method but this approach is more efficient
           //binding run just once, when component first gets initialized 
           // if we set the it in render it would rebind all the time render runs

         }

    render() {

        return (

            <div>
             <button onClick={this.props.removeAll}>Remove All</button>

            {
             this.props.data.map((value,index) => <Option key={value} text={value}/>)
            }
            </div>
        ) 
    }
}

class Option extends React.Component {

render() {
   
    return  (
        <div>
          <p>{this.props.text}</p>
        </div>
    )
}
}

class Adder extends React.Component {

    addOption(e){

      e.preventDefault()
      const text=e.target.elements.option.value.trim() // great solution for white spaces (trim method)
          text && alert(text)
    }

    render() {
        return (
            <form onSubmit={this.addOption}>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        )
    }
}


ReactDOM.render( <IndecisionApp/>, document.querySelector('#app'))



