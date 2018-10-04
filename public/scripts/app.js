'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
   _inherits(Counter, _React$Component);

   function Counter(props) {
      _classCallCheck(this, Counter);

      var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

      _this.handleAdd = _this.handleAdd.bind(_this);
      _this.handleSub = _this.handleSub.bind(_this);
      _this.handleRes = _this.handleRes.bind(_this);
      _this.state = {

         count: 0
      };
      return _this;
   }

   //set state manipulate the state and calls the render method


   _createClass(Counter, [{
      key: 'handleAdd',
      value: function handleAdd() {
         this.setState(function (prevState) {
            return { count: prevState.count + 1 };
         });
      }
   }, {
      key: 'handleSub',
      value: function handleSub() {
         this.setState(function (prevState) {
            return { count: prevState.count - 1 };
         });
      }
   }, {
      key: 'handleRes',
      value: function handleRes() {
         this.setState(function (prevState) {
            return { count: 0 };
         });
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
               'Count: ',
               this.state.count
            ),
            React.createElement(
               'button',
               { onClick: this.handleAdd },
               '+1'
            ),
            React.createElement(
               'button',
               { onClick: this.handleSub },
               '-1'
            ),
            React.createElement(
               'button',
               { onClick: this.handleRes },
               'reset'
            )
         );
      }
   }]);

   return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.querySelector('#app'));

// let count=0;


// const add = () => {

//     count++
//     render()

// }
// const sub = () => {

//     count--
//     render()
// }
// const reset = () => {
//     count=0
//     render()
// }

// const render = () => {

// const templateTwo = <div>

// <h1>Count {count}</h1>
// <button onClick={add}>+1</button>
// <button onClick={sub}>-1</button>
// <button onClick={reset}>reset</button>

// </div>

// ReactDOM.render(templateTwo,boxForRender)

// }

// render()
