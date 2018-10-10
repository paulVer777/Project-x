'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Todo = function (_React$Component) {
    _inherits(Todo, _React$Component);

    function Todo(props) {
        _classCallCheck(this, Todo);

        var _this = _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).call(this, props));

        _this.state = {
            todo: []

        };
        _this.addTodo = _this.addTodo.bind(_this);
        _this.removeTodo = _this.removeTodo.bind(_this);
        return _this;
    }

    _createClass(Todo, [{
        key: 'addTodo',
        value: function addTodo(text, uid) {
            var _this2 = this;

            if (!text) {
                return 'Please provide correct name';
            } else if (!this.state.todo.every(function (value, index) {
                return value.name !== text;
            })) {
                return 'Name already exists';
            }

            this.setState(function (prevState) {
                return { todo: prevState.todo.concat({ name: text, id: uid }) };
            }, function () {
                return console.log(_this2.state);
            });
        }
    }, {
        key: 'removeTodo',
        value: function removeTodo(item) {
            this.setState(function (prevState) {
                return { todo: prevState.todo.filter(function (value, index) {
                        return value.id !== item;
                    }) };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {

            var data = JSON.parse(localStorage.getItem('Todos'));

            this.setState(function (prevState) {
                return { todo: data };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {

            console.log('up');
            localStorage.setItem('Todos', JSON.stringify(this.state.todo));
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
                    'Todo'
                ),
                React.createElement(List, {

                    data: this.state.todo,
                    removeTodo: this.removeTodo
                }),
                React.createElement(Adder, { addTodo: this.addTodo })
            );
        }
    }]);

    return Todo;
}(React.Component);

var List = function List(props) {

    return React.createElement(
        'div',
        null,
        props.data.map(function (value, index) {
            return React.createElement(Item, {

                removeTodo: function removeTodo() {
                    return props.removeTodo(value.id);
                },
                name: value.name,
                key: value.id
            });
        })
    );
};

var Item = function Item(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            null,
            props.name
        ),
        React.createElement(
            'button',
            { onClick: props.removeTodo },
            'Remove'
        )
    );
};

var Adder = function (_React$Component2) {
    _inherits(Adder, _React$Component2);

    function Adder(props) {
        _classCallCheck(this, Adder);

        var _this3 = _possibleConstructorReturn(this, (Adder.__proto__ || Object.getPrototypeOf(Adder)).call(this, props));

        _this3.getText = _this3.getText.bind(_this3);
        _this3.getUid = _this3.getUid.bind(_this3);
        _this3.state = {
            error: undefined
        };
        return _this3;
    }

    _createClass(Adder, [{
        key: 'getUid',
        value: function getUid() {

            var id = Math.random() * 5;
            var str = id + '1';
            return str;
        }
    }, {
        key: 'getText',
        value: function getText(e) {

            e.preventDefault();
            var text = e.target.elements.todo.value;

            var error = this.props.addTodo(text, this.getUid());

            this.setState(function (prevState) {
                return { error: error };
            });

            if (!error) e.target.elements.todo.value = '';
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
                    { onSubmit: this.getText },
                    React.createElement('input', { type: 'text', name: 'todo' }),
                    React.createElement(
                        'button',
                        null,
                        'Add'
                    )
                )
            );
        }
    }]);

    return Adder;
}(React.Component);

ReactDOM.render(React.createElement(Todo, null), document.querySelector('#app'));
