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

var boxForRender = document.querySelector('#app')

// ReactDOM.render(jssX,boxForRender) 
// render display jsx to the user screen, that method takes two arguments, first is jsx 
// that is what we want to render and second is where we want to render.


const show = {
    title:'Pirrates of the carribean',
    subtitle:'march 23',
    options:[1,2]
}

const add = (a, b) => a + b

var templateTwo=(
    <div>
        {show.title && <h1>{show.title}</h1>}
        <p>{show.subtitle}</p>
        <p>{ show.options.length > 0 ? 'there are options' : ' no options'}</p>
        
    </div>
)

ReactDOM.render(templateTwo,boxForRender)

