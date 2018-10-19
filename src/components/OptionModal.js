import React from 'react'
import Modal from 'react-modal'

 
const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel='SelectedOption' // for people with disabilities
    onRequestClose={props.closeModal} // closes when user clicks on background or hit press escape button
    closeTimeoutMS={200}
    className='modal' // modal will use our styles and get rid of default styles
    >
    <h3 className='modal__title'>Selected option</h3>
    {props.selectedOption&&<p className='modal__body'>{props.selectedOption}</p>}
    <button 
    className='button'
    onClick={props.closeModal}>ok
    </button>
    </Modal>
)

export default OptionModal