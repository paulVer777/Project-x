console.log('app.js is running')

// JSX - JavaScript XML

// var jssX =
// (
//      <div>
//      < h1 > Indecision App</h1>
//      <p>This is some information</p>
//      <ol>1</ol>
//      <ol>2</ol>
//      </div>
// )


// var jssX = React.createElement(
//     "h1",
//     null,
//     " This is jsx"
//   );

const boxForRender = document.querySelector('#app')

// ReactDOM.render(jssX,boxForRender) 
// render display jsx to the user screen, that method takes two arguments, first is jsx 
// that is what we want to render and second is where we want to render.


const show = {
    title:'Pirrates of the carribean',
    subtitle:'march 23',
    options:[1,2]
}



// const templateTwo=(
//     <div>
//          {show.title && <h1>{show.title}</h1>}
//         <p>{show.subtitle}</p>
//         <p>{ show.options.length > 0 ? 'there are options' : ' no options'}</p>
        
//     </div>
// )

let count=0;


const add = () => {

    count++
    render()

}
const sub = () => {

    count--
    render()
}
const reset = () => {
    count=0
    render()
}

const render = () => {

const templateTwo = <div>

<h1>Count {count}</h1>
<button onClick={add}>+1</button>
<button onClick={sub}>-1</button>
<button onClick={reset}>reset</button>

</div>

ReactDOM.render(templateTwo,boxForRender)

}

render()

