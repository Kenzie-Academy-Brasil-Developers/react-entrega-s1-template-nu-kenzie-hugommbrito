import './FiltersStyle.css' 

const Filters = ({ setFilter }) => {
    return (
    <div className='filtersDiv'>
        <p className="title-5">Resumo financeiro</p>
        <div>
            <button onClick={() => setFilter("todos")}>Todos</button>
            <button onClick={() => setFilter("entrada")}>Entradas</button>
            <button onClick={() => setFilter("saída")}>Saídas</button>
        </div>
    </div>
    )
}

export default Filters
