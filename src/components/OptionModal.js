import React from 'react'
import Modal from 'react-modal'


const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel='SelectedOption'
    onRequestClose={props.closeModal} // closes when user clicks on background or hit press escape button
    
    >
    <h3>Selected option</h3>
    {props.selectedOption&&<p>{props.selectedOption}</p>}
    <button onClick={props.closeModal}>ok</button>
    </Modal>
)

export default OptionModal