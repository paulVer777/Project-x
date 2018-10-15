
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



/// return an object, 

// const check = (<div>

//   <p>heja</p>
//   <p>heja2</p>
//   </div>
//   )



//set state manipulate the state and calls the render method 

//calls to setState are asynchronous

//we should use setState with function as a argument, that function has acces to a previous state by argument, 
//and return an object with values we want to update


// using setState and passing object directly is not a good approach.




// for example changing a state from a empty array to a new empty array will cause firing the componentDidUpdate method,
//even if state didnt change


//import export

//import validator from 'validator' - webpack is going to look for a module in the node modules folder with the same name we provided
// import utils from './utils - dot and slash, we are going to use 'our' file not a 3rd party module



// import React from 'react' 
// import ReactDOM from 'react-dom' - we import react from node modules installed package