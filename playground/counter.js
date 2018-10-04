
class Counter extends React.Component {

   constructor(props){
      super(props);
     this.handleAdd=this.handleAdd.bind(this)
     this.handleSub=this.handleSub.bind(this)
     this.handleRes=this.handleRes.bind(this)
     this.state={
        
        count:0
     }
   }

//set state manipulate the state and calls the render method


 handleAdd(){
  this.setState((prevState)=> ({count:prevState.count+1}))
 }

 handleSub(){
    this.setState((prevState)=>({count:prevState.count-1}))

 }
handleRes(){
 this.setState((prevState)=>({count:0}))
    
}

render(){

  return (
    
    <div>
    <h1>Count: {this.state.count}</h1>
    <button onClick={this.handleAdd}>+1</button>
    <button onClick={this.handleSub}>-1</button>
    <button onClick={this.handleRes}>reset</button>
    </div>
  )
}
}


ReactDOM.render(<Counter/>,document.querySelector('#app'))














// let count=0;


// const add = () => {

//     count++
//     render()

// }
// const sub = () => {

//     count--
//     render()
// }
// const reset = () => {
//     count=0
//     render()
// }

// const render = () => {

// const templateTwo = <div>

// <h1>Count {count}</h1>
// <button onClick={add}>+1</button>
// <button onClick={sub}>-1</button>
// <button onClick={reset}>reset</button>

// </div>

// ReactDOM.render(templateTwo,boxForRender)

// }

// render()