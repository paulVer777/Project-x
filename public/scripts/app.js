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
            todos: [],
            sortBy: undefined
        };
        _this.addQuestHandler = _this.addQuestHandler.bind(_this);
        _this.removeQuestHandler = _this.removeQuestHandler.bind(_this);
        _this.removeAll = _this.removeAll.bind(_this);
        _this.sortHandler = _this.sortHandler.bind(_this);
        return _this;
    }

    _createClass(Todo, [{
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
                React.createElement(Sort, { sortHandler: this.sortHandler }),
                React.createElement(List, {
                    todos: this.state.todos,
                    removeQuestHandler: this.removeQuestHandler,
                    removeAll: this.removeAll
                }),
                React.createElement(Adder, { addQuestHandler: this.addQuestHandler })
            );
        }
    }, {
        key: 'sortHandler',
        value: function sortHandler(value) {
            console.log(value);
        }
    }, {
        key: 'addQuestHandler',
        value: function addQuestHandler(text, uid) {
            var _this2 = this;

            if (!text) {
                return 'Please type correct quests name';
            } else if (!this.state.todos.every(function (value, index) {
                return value.name !== text;
            })) {
                return 'Quest name already exists';
            }

            this.setState(function (prevState) {
                return {
                    todos: prevState.todos.concat({ name: text, id: uid })
                };
            }, function () {
                return console.log(_this2.state);
            });
        }
    }, {
        key: 'removeQuestHandler',
        value: function removeQuestHandler(id) {
            this.setState(function (prevState) {
                return { todos: prevState.todos.filter(function (value, index) {
                        return value.id !== id;
                    }) };
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function (prevState) {
                return { todos: [] };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var data = JSON.parse(localStorage.getItem('Todos'));
            this.setState(function (prevState) {
                return { todos: data };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            if (prevState.todos.length !== this.state.todos.length) {

                localStorage.setItem('Todos', JSON.stringify(this.state.todos));
                console.log('componentDidUpadate');
            }
        }
    }]);

    return Todo;
}(React.Component);

var List = function List(props) {
    return React.createElement(
        'div',
        null,
        props.todos.map(function (value, index) {
            return React.createElement(Quest, { obj: value, key: value.id, removeQuestHandler: props.removeQuestHandler });
        }),
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove All'
        )
    );
};

var Sort = function (_React$Component2) {
    _inherits(Sort, _React$Component2);

    function Sort(props) {
        _classCallCheck(this, Sort);

        var _this3 = _possibleConstructorReturn(this, (Sort.__proto__ || Object.getPrototypeOf(Sort)).call(this, props));

        _this3.getValuer = _this3.getValuer.bind(_this3);
        return _this3;
    }

    _createClass(Sort, [{
        key: 'getValuer',
        value: function getValuer(event) {

            var value = event.target.value;
            this.props.sortHandler(value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'select',
                    { onChange: this.getValuer },
                    React.createElement(
                        'option',
                        { value: 'one' },
                        'One'
                    ),
                    React.createElement(
                        'option',
                        { value: 'alpha' },
                        'Alphabetical'
                    )
                )
            );
        }
    }]);

    return Sort;
}(React.Component);

var Quest = function Quest(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'span',
            null,
            props.obj.name
        ),
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return props.removeQuestHandler(props.obj.id);
                } },
            ' Remove '
        )
    );
};

var Adder = function (_React$Component3) {
    _inherits(Adder, _React$Component3);

    function Adder(props) {
        _classCallCheck(this, Adder);

        var _this4 = _possibleConstructorReturn(this, (Adder.__proto__ || Object.getPrototypeOf(Adder)).call(this, props));

        _this4.state = {
            error: undefined
        };
        _this4.getData = _this4.getData.bind(_this4);
        _this4.getUid = _this4.getUid.bind(_this4);
        return _this4;
    }

    _createClass(Adder, [{
        key: 'getUid',
        value: function getUid() {
            return Math.random() * Math.random() + '1';
        }
    }, {
        key: 'getData',
        value: function getData(event) {
            event.preventDefault();

            var text = event.target.elements.quest.value;
            var uid = this.getUid();

            var error = this.props.addQuestHandler(text, uid);

            this.setState(function (prevState) {
                return { error: error };
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
                    { onSubmit: this.getData },
                    React.createElement('input', { type: 'text', name: 'quest' }),
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
