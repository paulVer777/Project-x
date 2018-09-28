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

var templateTwo=(
    <div>
        <h1>Paweł Polit</h1>
        <p>Age:26</p>
        <p>Location: Lublin</p>
    </div>
)

ReactDOM.render(templateTwo,boxForRender)