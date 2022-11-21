import { useState } from 'react';
import './App.css';
import './fonts.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TotalValue from './components/TotalValue/TotalValue';
import Filters from './components/Filters/Filters'
import Cards from './components/Cards/Cards';
import InitialPage from './components/InicialPage/InicialPage';

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 }
  ])
  const addTransaction = (newTransaction) => {
    setListTransactions([...listTransactions, newTransaction])
  }
  const deleteTransaction = (deletedTransaction) => {
    let filteredList = listTransactions.filter(transaction => transaction.description !== deletedTransaction.description)
    setListTransactions(filteredList)
  }

  const [selectedFilter, setSelectedFilter] = useState("todos")
  let filteredList = [...listTransactions]
  if(selectedFilter === "todos"){
    filteredList = [...listTransactions]
  } else if (selectedFilter === "entrada"){
     filteredList = listTransactions.filter(listItem => listItem.type === "entrada")
    } else if (selectedFilter === "saída"){
    filteredList = listTransactions.filter(listItem => listItem.type === "saída")
  }

  const [page, setPage] = useState("inicio")
  if(page === "inicio"){
      return (
        <div className="App">
          <InitialPage setPage={setPage} />
        </div>
      )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Header setPage={setPage}/>
        </header>
        <body className="App-Body">
          <section>
            <Form addTransaction={addTransaction} />
            <TotalValue list={filteredList}/>
          </section>
          <aside>
            <Filters setFilter={setSelectedFilter}/>
            <Cards list={filteredList} deleteTransaction={deleteTransaction} />
          </aside>
        </body>
      </div>
    )
  }
}

export default App;
