

class Toggler extends React.Component {

     constructor(props){
         super(props)
          this.toggleHandler=this.toggleHandler.bind(this)
           this.state={
             hidden:true,
             message:'This is message from state that is located in Toggler constructor'
         }

     }
     toggleHandler(){
      
        this.setState((prevState)=>({
            hidden:!prevState.hidden
        }))
       console.log(this.state)
    }

   render(){

     return (
         <div>
         <h1>Toggler</h1>
         <button onClick={this.toggleHandler}>{this.state.hidden ? 'Show message' : 'Hide message'}</button>
          {!this.state.hidden&&<p>{this.state.message}</p>}
         </div>
     )
   }
}


ReactDOM.render(<Toggler/>,document.querySelector('#app'))

const score = 2 && 0 

console.log(score)




// const appState = {

//     hidden: true,
//     message: 'this is message for You'
// }

// const toggle = () =>{

//   appState.hidden=!appState.hidden
//   render()
// }

// const render = () => {

//     const application=(
//         <div>
//           <h1>Visibility Toggle</h1>
//            <button onClick={toggle}>{ appState.hidden ? 'Show details' : 'hide details'}</button>
//            <p>{!appState.hidden && appState.message}</p>
//         </div>
     
//      )

//      ReactDOM.render(application,app)

// }


// render()