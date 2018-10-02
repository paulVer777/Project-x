

const appState = {

    hidden: true,
    message: 'this is message for You'
}

const toggle = () =>{

  appState.hidden=!appState.hidden
  render()
}

const render = () => {

    const application=(
        <div>
          <h1>Visibility Toggle</h1>
           <button onClick={toggle}>{ appState.hidden ? 'Show details' : 'hide details'}</button>
           <p>{!appState.hidden && appState.message}</p>
        </div>
     
     )

     ReactDOM.render(application,app)

}


render()