

    class Counter extends React.Component {
        
        constructor(props){
            super(props)
            this.adder=this.adder.bind(this)
            this.substractor=this.substractor.bind(this)
            this.reseter=this.reseter.bind(this)
           
            this.state={
                count:0
            }
        }
        
            adder(){
            this.setState((prevState)=>({count:prevState.count +1 }))

            }
            substractor(){
            this.setState((prevState)=>({count:prevState.count -1}))
            }
            reseter(){
                this.setState((prevState)=>({count:0}))
            }

            componentDidMount(){
                
                const data = parseInt(localStorage.getItem('Count'))
                 
                

                !isNaN(data) && this.setState((prevState)=>({count:data})) 

            }

            componentDidUpdate(){
            
                localStorage.setItem('Count',this.state.count)
                
            }

        render(){

            return (
                
                <div>
                <h1>Counter</h1>
                <h2>Score: {this.state.count}</h2>
                <button onClick={this.adder}>+</button>
                <button onClick={this.substractor}>-</button>
                <button onClick={this.reseter}>reset</button>
                </div>
            )
        }

        }

    ReactDOM.render(<Counter/>,document.querySelector('#app'))