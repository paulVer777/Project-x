
const boxForRender = document.querySelector('#app')


const show = {
    title:'Indecision App',
    subtitle:'Take it easy',
    options:[]
}


const onSubmitHandler = (e) =>{

e.preventDefault()

const text=e.target.elements.option.value

if(text){
     show.options.push(text)
     render()
     e.target.elements.option.value=''
}
}

const removeAll = () => {

show.options=[]
render()

}


const generateRandom = () => {

  const randomNum = Math.floor(Math.random() *show.options.length)
  alert(show.options[randomNum])
}

const render = () =>{
    const templateTwo=(
    <div>
         {show.title && <h1>{show.title}</h1>}
        <p>{show.subtitle}</p>
        <p>{ show.options.length > 0 ? 'there are options' : ' no options'}</p>
        <button disabled={show.options.length === 0} onClick={generateRandom}>What should I do?</button>
    
          <button onClick={removeAll}>Remove</button>

           <ol>
            {
              show.options.map((value,index) => <li key={value}> option : {value} </li>)
            }
            </ol>

         <form onSubmit={onSubmitHandler}>
         <input type='text' name='option'></input>
         <button>Add option</button>
        </form>

    </div>
)

ReactDOM.render(templateTwo,boxForRender)
}

console.log(show.options.map((value,index) => <li key={value}> option : {value} </li>))

render()

