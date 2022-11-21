import "./TotalValueStyle.css"

const TotalValue = ({ list }) => {
    let totalValueSum = 0
    if(list.length > 1){
        totalValueSum = list.reduce((acc, cur) => (acc.value || acc) + cur.value)
    } else if (list.length === 1){
        totalValueSum = list[0].value
    }
    
    return(
        <div className="totalValueContainer">
            <div>
                <p className="title-3">Valor Total:</p>
                <p className="title-3">{totalValueSum >= 0 ? "R$" : "- R$"}{totalValueSum >= 0 ? totalValueSum : String(totalValueSum).slice(1)}</p>
            </div>
            <p className="body-text">O valor se refere ao saldo</p>
        </div>
    )
}

export default TotalValue