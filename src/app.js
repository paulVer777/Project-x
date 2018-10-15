
import React from 'react' 
import ReactDOM from 'react-dom'


const template = React.createElement(
    'div',
    null,
    'Hello World!!'
)

    console.log(template)

    ReactDOM.render(template,document.querySelector('#app'))

