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
        _this.state = {
            options: [1, 2, 3, 4, 5]
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
                React.createElement(Adder, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    'Helpful App'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: !this.props.isAnyOption, onClick: this.props.optionPicker },
                    'What should i do?'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
        //    this.removeAll=this.removeAll.bind(this) // we set the desired context for removeAll in the constructor, 
        // we could do that also in the render method but this approach is more efficient
        //binding run just once, when component first gets initialized 
        // if we set the it in render it would rebind all the time render runs
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.removeAll },
                    'Remove All'
                ),
                this.props.data.map(function (value, index) {
                    return React.createElement(Option, { key: value, text: value });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return Option;
}(React.Component);

var Adder = function (_React$Component6) {
    _inherits(Adder, _React$Component6);

    function Adder() {
        _classCallCheck(this, Adder);

        return _possibleConstructorReturn(this, (Adder.__proto__ || Object.getPrototypeOf(Adder)).apply(this, arguments));
    }

    _createClass(Adder, [{
        key: 'addOption',
        value: function addOption(e) {

            e.preventDefault();
            var text = e.target.elements.option.value.trim(); // great solution for white spaces (trim method)
            text && alert(text);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.addOption },
                React.createElement('input', { type: 'text', name: 'option' }),
                React.createElement(
                    'button',
                    null,
                    'Add option'
                )
            );
        }
    }]);

    return Adder;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector('#app'));
