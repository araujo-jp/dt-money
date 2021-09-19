import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'


// transactionContext.Provider()

interface TransactionProps {
  id: number;
  title: string;
  type: string
  category: string
  amount: number;
  createdAt: string;
}

interface TransactionProviderProps {
  children: ReactNode
}

type TransactionInput = Omit<TransactionProps, 'id' | 'createdAt'>

interface TransactionsContextData {
  transactions: TransactionProps[];
  createTransaction: (transaction : TransactionInput) => Promise<void>;
}

const transactionContext = createContext<TransactionsContextData>({} as TransactionsContextData )

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {    
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    });
    const { transaction } = response.data;
    setTransactions([...transactions, transaction]);
  }

  return (
    <transactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </transactionContext.Provider>
  )
}

export function useTransaction() {
  const context = useContext(transactionContext)

  return context
}