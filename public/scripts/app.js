'use strict';

var appState = {

    hidden: true,
    message: 'this is message for You'
};

var toggle = function toggle() {

    appState.hidden = !appState.hidden;
    render();
};

var render = function render() {

    var application = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            appState.hidden ? 'Show details' : 'hide details'
        ),
        React.createElement(
            'p',
            null,
            !appState.hidden ? appState.message : ''
        )
    );

    ReactDOM.render(application, app);
};

render();
