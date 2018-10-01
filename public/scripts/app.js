'use strict';

console.log('app.js is running');

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

var boxForRender = document.querySelector('#app');

// ReactDOM.render(jssX,boxForRender) 
// render display jsx to the user screen, that method takes two arguments, first is jsx 
// that is what we want to render and second is where we want to render.


var show = {
    title: 'Pirrates of the carribean',
    subtitle: 'march 23',
    options: [1, 2]

    // const templateTwo=(
    //     <div>
    //          {show.title && <h1>{show.title}</h1>}
    //         <p>{show.subtitle}</p>
    //         <p>{ show.options.length > 0 ? 'there are options' : ' no options'}</p>

    //     </div>
    // )

};var count = 0;

var add = function add() {

    count++;
    render();
};
var sub = function sub() {

    count--;
    render();
};
var reset = function reset() {
    count = 0;
    render();
};

var render = function render() {

    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count ',
            count
        ),
        React.createElement(
            'button',
            { onClick: add },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: sub },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, boxForRender);
};

render();
