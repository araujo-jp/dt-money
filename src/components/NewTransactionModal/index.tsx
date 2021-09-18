import { useState } from 'react'
import Modal from 'react-modal'
import { Container } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {  

  return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        >
          <h2>Hello</h2>
          <button onClick={onRequestClose}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
    </Modal>
  )
}