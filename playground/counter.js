let count=0;


const add = () => {

    count++
    render()

}
const sub = () => {

    count--
    render()
}
const reset = () => {
    count=0
    render()
}

const render = () => {

const templateTwo = <div>

<h1>Count {count}</h1>
<button onClick={add}>+1</button>
<button onClick={sub}>-1</button>
<button onClick={reset}>reset</button>

</div>

ReactDOM.render(templateTwo,boxForRender)

}

render()