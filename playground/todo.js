
class Todo extends React.Component {

       constructor(props){
           super(props)
           this.state={
               todos:[],
               sortBy:undefined
           }
           this.addQuestHandler = this.addQuestHandler.bind(this)
           this.removeQuestHandler = this.removeQuestHandler.bind(this) 
           this.removeAll = this.removeAll.bind(this) 
           this.sortHandler = this.sortHandler.bind(this) 
       }
       render(){
           return(
               <div>
               <h1>Todos</h1>
               <Sort sortHandler={this.sortHandler}/>
               <List
                todos={this.state.todos}
                removeQuestHandler={this.removeQuestHandler}
                removeAll={this.removeAll}
               />
               <Adder addQuestHandler={this.addQuestHandler}/>
               </div>
           )
       }

       sortHandler(value){
       console.log(value)
       }

       addQuestHandler(text,uid){
          
        if(!text){
            return 'Please type correct quests name'
        }
        else if(!this.state.todos.every((value, index) => value.name !== text))
        {
            return 'Quest name already exists'
        }
        
        this.setState((prevState)=>({
              todos:prevState.todos.concat({name:text,id:uid})
          }),() => console.log(this.state))
          
       }
       removeQuestHandler(id){
        this.setState((prevState) => ({ todos:prevState.todos.filter((value,index) =>
        value.id !== id
        )}))
       }
       removeAll(){
           this.setState((prevState) => ({todos:[]}) )
       }
       
       componentDidMount(){
           const data = JSON.parse(localStorage.getItem('Todos'))
            this.setState((prevState) => ({todos:data}))
       }

       componentDidUpdate(prevProps, prevState ){
        
        if(prevState.todos.length !== this.state.todos.length){

            localStorage.setItem('Todos',JSON.stringify(this.state.todos))
            console.log('componentDidUpadate')
            
        }
       }
}

const List = (props) => {
    return(
        <div>
        {props.todos.map((value,index) => <Quest obj = {value} key = {value.id} removeQuestHandler = { props.removeQuestHandler}/> )}
        <button onClick={props.removeAll}>Remove All</button>
        </div>
    )
}

class Sort extends React.Component {

       constructor(props){
           super(props)
           this.getValuer=this.getValuer.bind(this)
       }
       getValuer(event){
        
         const value = event.target.value
         this.props.sortHandler(value)
       }
            
    render(){
        return(
            <div>
            <select onChange={this.getValuer}>
           <option value='one' >One</option>
           <option value='alpha' >Alphabetical</option>
           </select>
            </div>
        )
    }
}

const Quest = (props) => {
    return(
        <div>
        <span>{props.obj.name}</span>
        <button onClick={ () => props.removeQuestHandler(props.obj.id)}> Remove </button> 
        </div>
    )
}

class Adder extends React.Component{
    constructor(props){
        super(props)
        this.state={
            error:undefined
        }
        this.getData = this.getData.bind(this)
        this.getUid = this.getUid.bind(this)
    }
    getUid(){
        return Math.random()*Math.random() + '1'
    }

    getData(event){
    event.preventDefault()
    
    const text = event.target.elements.quest.value
    const uid = this.getUid()

    const error = this.props.addQuestHandler(text,uid)
      
    this.setState((prevState) => ({error}))

    }
    render(){
        return(
            <div>
            {this.state.error&&<p>{this.state.error}</p>}
            <form onSubmit = {this.getData}>
            <input type ='text' name = 'quest'/>
            <button>Add</button>
            </form>
            </div>
        )
    }
} 

ReactDOM.render(<Todo/>,document.querySelector('#app'))