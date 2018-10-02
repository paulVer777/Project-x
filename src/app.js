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

        return <div>
            <p>options</p>
        </div>

    }

}

class Suboption extends React.Component {

    render() {
        return (
            <form>
                <input type='text' name='option'/>
                <button>Add option</button>
            </form>
        )
    }
}

const jsx = (

    <div>
        <Header/>
        <Action/>
        <Options/>
        <Suboption/>
    </div>
)

console.log(jsx)

ReactDOM.render(jsx, document.querySelector('#app'))