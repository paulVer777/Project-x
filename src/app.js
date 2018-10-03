
class IndecisionApp extends React.Component {

    render() {

       return (
           <div>
        <Header/>
        <Action/>
        <Options/>
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

    render() {

        return (

            <div>
            <p>Options component</p>
            <Option/>
            </div>

        ) 
    }
}

class Option extends React.Component {

render() {
   
    return  (
        <div>
          <p>Option</p>
        </div>
    )
}
}

class Adder extends React.Component {

    render() {
        return (
            <form>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        )
    }
}

ReactDOM.render( <IndecisionApp/>, document.querySelector('#app'))