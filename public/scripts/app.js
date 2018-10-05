'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggler = function (_React$Component) {
    _inherits(Toggler, _React$Component);

    function Toggler(props) {
        _classCallCheck(this, Toggler);

        var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, props));

        _this.toggleHandler = _this.toggleHandler.bind(_this);
        _this.state = {
            hidden: true,
            message: 'This is message from state that is located in Toggler constructor'
        };

        return _this;
    }

    _createClass(Toggler, [{
        key: 'toggleHandler',
        value: function toggleHandler() {

            this.setState(function (prevState) {
                return {
                    hidden: !prevState.hidden
                };
            });
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Toggler'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleHandler },
                    this.state.hidden ? 'Show message' : 'Hide message'
                ),
                !this.state.hidden && React.createElement(
                    'p',
                    null,
                    this.state.message
                )
            );
        }
    }]);

    return Toggler;
}(React.Component);

ReactDOM.render(React.createElement(Toggler, null), document.querySelector('#app'));

// const appState = {

//     hidden: true,
//     message: 'this is message for You'
// }

// const toggle = () =>{

//   appState.hidden=!appState.hidden
//   render()
// }

// const render = () => {

//     const application=(
//         <div>
//           <h1>Visibility Toggle</h1>
//            <button onClick={toggle}>{ appState.hidden ? 'Show details' : 'hide details'}</button>
//            <p>{!appState.hidden && appState.message}</p>
//         </div>

//      )

//      ReactDOM.render(application,app)

// }


// render()
