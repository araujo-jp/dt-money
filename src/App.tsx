import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from  'react-modal'
import { GlobalStyle } from './styles/global';
import { useState } from 'react';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTranactionModal={handleOpenTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseTransactionModal}
        >
          <h2>Hello</h2>
          <button onClick={handleCloseTransactionModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
    </>
  );
}
