console.log('app.js is running')

// JSX - JavaScript XML

var jssX = < h1 > Indecision App</h1>

// var jssX = React.createElement(
//     "h1",
//     null,
//     " This is jsx"
//   );
var boxForRender = document.querySelector('#app')

ReactDOM.render(jssX,boxForRender) // render display jsx to the user screen, that method takes two arguments, first is jsx 
// that is what we want to render and second is where we want to render.