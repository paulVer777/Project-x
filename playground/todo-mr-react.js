
    class Todo extends React.Component {

        constructor(props){
            super(props)
            this.state={
                todo:[],
                
            }
            this.addTodo=this.addTodo.bind(this)
            this.removeTodo=this.removeTodo.bind(this)
        }
        
        addTodo(text,uid){
        
        if(!text){
            return 'Please provide correct name'
        }
        else if(!this.state.todo.every((value,index) => value.name !== text))
           {
               return 'Name already exists'
           }


        this.setState((prevState)=>(
            {todo:prevState.todo.concat({name:text,id:uid})}),()=>console.log(this.state))
        
        }

        removeTodo(item){
             this.setState((prevState)=>({todo:prevState.todo.filter((value,index) => value.id !== item )}))
        }

       componentDidMount(prevProps, prevState){
        
        const data= JSON.parse(localStorage.getItem('Todos'))
         
        this.setState((prevState)=>({todo:data}))
       }

       componentDidUpdate(prevProps, prevState){

          !prevState.todos.length === this.state.todos.length && localStorage.setItem('Todos', JSON.stringify(this.state.todo))

         

       }


        render(){
            return (
                <div>
                <h1>Todo</h1>
                <List 
                
                data={this.state.todo}
                removeTodo={this.removeTodo}
                />
                <Adder addTodo={this.addTodo}/>
                </div>
            )
        }
    }

        const List = (props) => {

        return (<div>
            
            {props.data.map((value,index) => <Item 
                
                    removeTodo={()=> props.removeTodo(value.id)}
                    name={value.name}
                    key={value.id}
                />
               )}
            
            </div>)

        }

            const Item = (props) => {

                return (
                    <div>
                    <span>{props.name}</span> 
                    <button onClick={props.removeTodo}>Remove</button>
                    </div>
                )
            }

            class Adder extends React.Component {

                constructor(props){
                    super(props)
                    this.getText = this.getText.bind(this)
                    this.getUid = this.getUid.bind(this)
                    this.state = {
                        error:undefined
                    }
                }


                        getUid(){

                    const id=Math.random()*5
                    const str=id+'1'
                    return str
                    
                        }

                    getText(e){
                    
                    e.preventDefault()
                    const text = e.target.elements.todo.value
                
                    const error=this.props.addTodo(text,this.getUid())
                    
                    this.setState((prevState) => ({error}))
                    
                   if(!error) e.target.elements.todo.value=''

                    }

        render(){

            return(
                        <div>
                         {this.state.error&&<p>{this.state.error}</p>}
                        <form onSubmit={this.getText}>
                        <input type='text' name='todo'/>
                        <button>Add</button>
                        </form>
                        </div>
            )
                }
            }

    ReactDOM.render(<Todo/>,document.querySelector('#app'))