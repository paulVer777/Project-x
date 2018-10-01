
// JSX - JavaScript XML



////// JSX ////////////

var jssX = (
    <div id={8}>s
    <p id='s'>This is jsx</p>
    </div>
)
////////////////////////////////


////////////// JSX TRANSPILED BY BABEL ////////

var jssX = React.createElement(
    'div',
    { id: 8 }, // null if there is no properties 
    's',
    React.createElement(
      'p',
      { id: 's' },
      ' This is jsx'
    )
  );



const boxForRender = document.querySelector('#app')

// ReactDOM.render(jssX,boxForRender) 
// render display jsx to the user screen, that method takes two arguments, first is jsx 
// that is what we want to render and second is where we want to render.

//React.createElement return an object that represent our entire JSX tree.
// React use algorithms to compare two objects, compare new object with the previous one, checks what has changed and then 
// updates and render only things that changed without rendering the whole component once again.


//React algorithm - ' little bit of JS code to see if two things are equal or not, it's a whole lot faster than running
// through the procces of re-rendering  and repainting all those pixels to the browser again.
// it renders and repaints only changes in objects