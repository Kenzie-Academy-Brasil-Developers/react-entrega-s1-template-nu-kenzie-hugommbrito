import './CardsStyle.css'
import NoCard from '../../img/NoCard.png'

const Cards = ({ list, deleteTransaction }) => {
    return (list.length > 0) ?
    (
        <>
            {list.map((listItem, key) => (
            <div className="cardContainer" id={key}>
                <div className={(listItem.type === "entrada") ? "cardIndicatorGreen" : "cardIndicatorGrey"}></div>
                <div className="cardInfo">
                    <div>
                        <p className="title-5">{listItem.description}</p>
                        <p className="body-text">{listItem.type}</p>
                    </div>
                    <div>
                        <p className="body-text">{listItem.type === "entrada" ? "R$" : "- R$"}{listItem.value >= 0 ? listItem.value : String(listItem.value).slice(1)}</p>
                        <button onClick={(e) => {e.preventDefault(); deleteTransaction(listItem)}}></button>
                    </div>

                </div>
            </div>
            ))}
        </>
    )
    : (
        <div className="emptyCardContainer">
            <img src={NoCard} alt="" />
            <img src={NoCard} alt="" />
            <img src={NoCard} alt="" />
        </div>
    )
}

export default Cards
