'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.optionPicker = _this.optionPicker.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'optionPicker',
        value: function optionPicker() {
            var index = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[index]);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {

            if (!option) {
                return 'type the correct name';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(option) //we never want to manipulate the state or the previous state here
                    // thats why we can't use push instead of concat,we want to compute new one
                    //concat nie zmienia oryginalnej tablicy, lecz zwraca jej kopię 
                    //concat doesnt change the original array instead it returns its copy thats why we want to use it here
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var title = 'Indecision';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title }),
                React.createElement(Action, {
                    optionPicker: this.optionPicker,
                    isAnyOption: this.state.options.length > 0 }),
                React.createElement(Options, {
                    removeAll: this.removeAll,
                    data: this.state.options }),
                React.createElement(Adder, { addOption: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            'Helpful App'
        )
    );
};

var Action = function Action(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.isAnyOption, onClick: props.optionPicker },
            'What should i do?'
        )
    );
};

var Options = function Options(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove All'
        ),
        props.data.map(function (value, index) {
            return React.createElement(Option, { key: value, text: value });
        })
    );
};

var Option = function Option(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            props.text
        )
    );
};

var Adder = function (_React$Component2) {
    _inherits(Adder, _React$Component2);

    function Adder(props) {
        _classCallCheck(this, Adder);

        var _this2 = _possibleConstructorReturn(this, (Adder.__proto__ || Object.getPrototypeOf(Adder)).call(this, props));

        _this2.addOption = _this2.addOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(Adder, [{
        key: 'addOption',
        value: function addOption(e) {
            var _this3 = this;

            e.preventDefault();
            var text = e.target.elements.option.value.trim(); // great solution for white spaces (trim method)

            this.setState(function () {
                return { error: _this3.props.addOption(text) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return Adder;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector('#app'));
