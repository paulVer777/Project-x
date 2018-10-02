'use strict';

var boxForRender = document.querySelector('#app');

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

var generateRandom = function generateRandom() {

    var randomNum = Math.floor(Math.random() * show.options.length);
    alert(show.options[randomNum]);
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
            'button',
            { disabled: show.options.length === 0, onClick: generateRandom },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove'
        ),
        React.createElement(
            'ol',
            null,
            show.options.map(function (value, index) {
                return React.createElement(
                    'li',
                    { key: value },
                    ' option : ',
                    value,
                    ' '
                );
            })
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

console.log(show.options.map(function (value, index) {
    return React.createElement(
        'li',
        { key: value },
        ' option : ',
        value,
        ' '
    );
}));

render();
