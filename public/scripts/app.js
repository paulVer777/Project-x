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
    title: 'Indecision App',
    subtitle: 'Take it easy',
    options: []
};

var onSubmitHandler = function onSubmitHandler(e) {

    e.preventDefault();

    var text = e.target.elements.option.value;

    if (text) {
        show.options.push(text);
        render();
        e.target.elements.option.value = '';
    }
};

var removeAll = function removeAll() {

    show.options = [];
    render();
};

var render = function render() {
    var templateTwo = React.createElement(
        'div',
        null,
        show.title && React.createElement(
            'h1',
            null,
            show.title
        ),
        React.createElement(
            'p',
            null,
            show.subtitle
        ),
        React.createElement(
            'p',
            null,
            show.options.length > 0 ? 'there are options' : ' no options'
        ),
        React.createElement(
            'p',
            null,
            show.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove'
        ),
        React.createElement(
            'form',
            { onSubmit: onSubmitHandler },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(templateTwo, boxForRender);
};

render();
