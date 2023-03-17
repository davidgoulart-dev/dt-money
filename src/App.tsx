import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

Modal.setAppElement('#root');


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsContext.Provider value={[transactions]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <GlobalStyle />
      <NewTransactionModal isOpen={ isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      
      
     
      
    </TransactionsContext.Provider>
  );
}


