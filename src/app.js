
class IndecisionApp extends React.Component {

    render() {

        const data=[5,4,3,2]

       return (
           <div>
        <Header/>
        <Action/>
        <Options data={data}/>
        <Adder/>
           </div>
       )
    }
}

class Header extends React.Component {

    render() {

        return (
            <div>
                <h1>Indecision</h1>
                <h2>Helpful App</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    render() {

        return (
            <div>
                <button>What should i do?</button>
            </div>
        )
    }
}

class Options extends React.Component {

         constructor(props){
          super(props)
           this.removeAll=this.removeAll.bind(this) // we set the desired context for removeAll in the constructor, 
           // we could do that also in the render method but this approach is more efficient
           //binding run just once, when component first gets initialized 
           // if we set the it in render it would rebind all the time render runs

         }

    removeAll(){

    console.log(this.props.data)
    }



    render() {

        return (

            <div>
             <button onClick={this.removeAll}>Remove All</button>

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



