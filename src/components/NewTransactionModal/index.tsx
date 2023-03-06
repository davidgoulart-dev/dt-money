import Modal from 'react-modal';
import { Container, TransactionTypeContainer  } from '../NewTransactionModal/styles';
import closeImg  from '../../assets/close.svg';
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import { useState } from 'react';
interface NewTransactionModalProps { 
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit');
   
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content">
          <button 
          type="button" 
          onClick={onRequestClose} 
          className="react-modal-close">
            <img src={closeImg} alt="Fechar modal" />
            
            </button>  

        <Container>
         
          <h2>Cadastrar transação</h2>
          <input 
           placeholder="Título" />

          <input
           type="number"
            placeholder="Valor" />

          <TransactionTypeContainer> 
            <button 
            type="button" onClick={ () => {
                setType('deposit');
            
            }}
           > 
                <img src={ incomeImg } alt="Entrada" />
                <span>Entrada</span>
            </button> 

            <button 
            type="button" onClick={ () => {
                setType('withdraw');
            }}
           > 
                <img src={ outcomeImg } alt="Saída" />
                <span>Saída</span>
            </button> 

          </TransactionTypeContainer> 


          <input  
          placeholder="Categoria" />
            
            <button type="submit">Cadastrar</button>
        
        </Container>

        </Modal>
    )
}