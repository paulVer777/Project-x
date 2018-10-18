
import React from 'react' ;
import Adder from './AddOption';
import Header from './Header';
import Action from './action';
import Options from './Options';
import OptionModal from './OptionModal';
import 'normalize.css';
import '../styles/styles.scss' ;

export default class IndecisionApp extends React.Component {

    state = {
        options:[], // if props are not provided the default value is going to be used
        selectedOption:undefined
    }
       
    // constructor(props){
    // //     super(props)
    // //     this.removeAll=this.removeAll.bind(this)
    // //     this.optionPicker=this.optionPicker.bind(this)
    // //     this.addOption=this.addOption.bind(this)
    // //     this.removeItem=this.removeItem.bind(this)
    // //     this.state={
    // //         options:[] // if props are not provided the default value is going to be used
    // //     }
    // // }
    
    closeModal = () =>{
       
        this.setState((prevState) => ({selectedOption:undefined}))
    }

    removeAll = () => {
        this.setState(()=>({options:[]}))
    }
    removeItem = (item) =>{
    this.setState(()=>({options:this.state.options.filter((value,index) => item !== value )}))
    }

    optionPicker = () => {
        const index = Math.floor(Math.random()*this.state.options.length)
       
        this.setState((prevState) => ({selectedOption:this.state.options[index]})) //updater object, will not wipe the other state properties
       
    }
    addOption = (option) =>{
        
        if(!option){
            return 'type the correct name'
        }
        else if(this.state.options.indexOf(option) > -1)
        {
            return 'this option already exists'
        }

        this.setState((prevState)=>({
            options:prevState.options.concat(option) // we never want to manipulate the state or the previous state here
            // thats why we can't use push instead of concat,we want to compute new one
            //concat nie zmienia oryginalnej tablicy, lecz zwraca jej kopię 
            //concat doesnt change the original array instead it returns its copy thats why we want to use it here
       
        }),() => console.log(this.state.options))//callback executes when setStat finishes its own operations
           
    }

            componentDidMount(prevProps,prevState){
                
            try {
            
                const data=JSON.parse(localStorage.getItem('Options'))

                data && this.setState(()=>({options:data})) 

            } catch (error) {
                // if try doesnt work do nothing at all because by default the empty array is set in state
            }   // program will still running even if error will occure

                }

            componentDidUpdate(prevProps,prevState){
            if(prevState.options.length !== this.state.options.length)
            {
            const data = JSON.stringify(this.state.options)
                localStorage.setItem('Options',data)
            }
        }

    render() {
    
    return (
        <div>
        <Header subtitle={'Keep on'}/>
        <div className='container'>
        <Action 
                    optionPicker={this.optionPicker}
                    isAnyOption={this.state.options.length > 0}/>

        <div className='widget'>
        <Options 
                    removeItem={this.removeItem}
                    removeAll={this.removeAll}
                    data={this.state.options}/>
        <Adder 
                    addOption={this.addOption}/>

        </div>
        </div>
        <OptionModal 
                     selectedOption={this.state.selectedOption}
                     closeModal={this.closeModal}
                     
        />
        </div>
        
    )
    }
}
            