import React from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import { Container, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal"></img>
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input placeholder="Título" />

        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Fechar modal"></img>
            <span>Entrada</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeImg} alt="Fechar modal"></img>
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
        
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
     
    </Modal>
  )
}