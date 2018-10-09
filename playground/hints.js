

/////////////////////////////////////////////
const word = 'Pawel Polit'

console.log(word.split(''))


word.split('') // < ['P','a','w','e','l',',','P','o','l','i','t']
word.split(' ') // < ['Pawel','Polit']
word.split() // < ['Pawel Polit] 

//////////////////////////////

const multiplier = {

    multi:2,
 
    doIt(...nums){
      
     return nums.map((value,index) => value * this.multi)
       
    }
 }
 
 
 console.log(multiplier.doIt(2,10,100))



 ////// Currying ///////



 const add = (a) =>{

    return (b)=> a+b 

}


console.log(add(5)(5)) 






class Options extends React.Component {

    constructor(props){
     super(props)
      this.removeAll=this.removeAll.bind(this) // we set the desired context for removeAll in the constructor, 
      // we could do that also in the render method but this approach is more efficient
      //binding run just once, when component first gets initialized 
      // if we set the it in render it would rebind all the time render runs

    }

render() {

   return (

       <div>
        <button onClick={this.props.removeAll}>Remove All</button>

       {
        this.props.data.map((value,index) => <Option key={value} text={value}/>)
       }
       </div>
   ) 
}
}