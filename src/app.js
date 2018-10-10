
    class IndecisionApp extends React.Component {

        constructor(props){
            super(props)
            this.removeAll=this.removeAll.bind(this)
            this.optionPicker=this.optionPicker.bind(this)
            this.addOption=this.addOption.bind(this)
            this.removeItem=this.removeItem.bind(this)
            this.state={
                options:this.props.options // if props are not provided the default value is going to be used
            }
        }

        removeAll(){
            this.setState(()=>({options:[]}))
        }
        removeItem(item){
        this.setState(()=>({options:this.state.options.filter((value,index) => item !== value )}))
        }

        optionPicker(){
            const index = Math.floor(Math.random()*this.state.options.length)
            alert(this.state.options[index])
        }
        addOption(option){
            
            if(!option){
                return 'type the correct name'
            }
            else if(this.state.options.indexOf(option) > -1)
            {
                return 'this option already exists'
            }


            this.setState((prevState)=>({
                options:prevState.options.concat(option) // we never want to manipulate the state or the previous state here
                // thats why we can't use push instead of concat,we want to compute new one
                //concat nie zmienia oryginalnej tablicy, lecz zwraca jej kopię 
                //concat doesnt change the original array instead it returns its copy thats why we want to use it here
            }))
            
        }
    
                componentDidMount(prevProps,prevState){
                    
                try {
                
                    const data=JSON.parse(localStorage.getItem('Options'))

                    data && this.setState(()=>({options:data})) 

                } catch (error) {
                    // if try doesnt work do nothing at all because by default the empty array is set in state
                }   // program will still running even if error will occure

                    }

                componentDidUpdate(prevProps,prevState){
                if(prevState.options.length !== this.state.options.length)
                {
                const data = JSON.stringify(this.state.options)
                    localStorage.setItem('Options',data)
                }
            }





        render() {

        const title='Indecision'
        
        return (
            <div>
            <Header subtitle={'Keep on'}/>
            <Action 
            optionPicker={this.optionPicker}
            isAnyOption={this.state.options.length > 0}/>
            <Options 
            removeItem={this.removeItem}
            removeAll={this.removeAll}
            data={this.state.options}/>
            <Adder addOption={this.addOption}/>
            </div>
        )
        }
    }
                
    IndecisionApp.defaultProps={
        options:[]
    }

    const Header = (props) => {

            return (
                <div>
                    <h1>{props.title}</h1>
                    {props.subtitle&&<h2>{props.subtitle}</h2>}
                </div>
            )
    }

    Header.defaultProps = { // default props are used if we dont provide any props to a component

        title:'Indecision App'
    }

    const Action = (props) =>{

        return (
            <div>
                <button disabled={!props.isAnyOption} onClick={props.optionPicker}>What should i do?</button>
            </div>
        )
    }

    const  Options = (props) => {

            return (

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
        }


    const Option = (props) => {

        return  (
            <div>
            <span>{props.text} </span>
            <button onClick={(e) => props.removeItem(props.text)} > Remove </button>

            </div>
        )
    }

    class Adder extends React.Component {
            
        constructor(props){
            super(props)
            this.addOption=this.addOption.bind(this)
            this.state= {
                error:undefined
            }
        }
        addOption(e){
        
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


    ReactDOM.render( <IndecisionApp/>, document.querySelector('#app'))


    // 
