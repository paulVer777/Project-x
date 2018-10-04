
class Counter extends React.Component {

   constructor(props){
      super(props)
     this.handleAdd=this.handleAdd.bind(Counter)
     this.handleSub=this.handleSub.bind(Counter)
     this.handleRes=this.handleRes.bind(Counter)

   }


 handleAdd(){
  console.log('add')

 }
 handleSub(){
    console.log('minus')

 }
handleRes(){

    console.log('reset')
}

render(){

  return (
    
    <div>
    <h1>Indecision</h1>
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