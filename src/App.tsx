import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from  'react-modal'
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

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
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseTransactionModal} 
      />
      <GlobalStyle />      
    </>
  );
}
