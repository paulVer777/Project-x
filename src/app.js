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
    title:'Indecision App',
    subtitle:'Take it easy',
    options:[]
}


const onSubmitHandler = (e) =>{

e.preventDefault()

const text=e.target.elements.option.value

if(text){
     show.options.push(text)
     render()
     e.target.elements.option.value=''
}
}

const removeAll = () => {

show.options=[]
render()

}

const render = () =>{
    const templateTwo=(
    <div>
         {show.title && <h1>{show.title}</h1>}
        <p>{show.subtitle}</p>
        <p>{ show.options.length > 0 ? 'there are options' : ' no options'}</p>
        <p>{ show.options.length}</p>
    
          <button onClick={removeAll}>Remove</button>

        <form onSubmit={onSubmitHandler}>
         <input type='text' name='option'></input>
         <button>Add option</button>
        </form>

    </div>
)

ReactDOM.render(templateTwo,boxForRender)
}


render()