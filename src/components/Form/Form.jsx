import { useState } from "react"

import "./FormStyle.css"

const Form = ({ addTransaction }) => {
    const [inputDescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputType, setInputType] = useState("entrada")

    let newTransaction = {
        description: inputDescription,
        type: inputType,
        value: ((inputType === "entrada")
                ? (inputValue)
                : (inputValue * -1))
    }

    return (
        <div className="formContainer">
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description" onChange={(e) => setInputDescription(e.target.value)} placeholder="Digite aqui sua descrição" />
            <p className="body-text">Ex: Compra de roupas</p>
            <div id="inputs">
                <div id="value">
                    <label htmlFor="valueInput">Valor</label>
                    <input type="text" id="valueInput" onChange={(e) => setInputValue(Number(e.target.value))} />
                </div>
                <div id="type">
                    <label htmlFor="typeInput">Tipo de Valor</label>
                    <select name="typeInput" id="typeInput" onChange={(e) => setInputType(e.target.value)} >
                        <option value="entrada">Entrada</option>
                        <option value="saída">Saída</option>
                    </select>
                </div>
            </div>
            <button onClick={() => addTransaction(newTransaction)}>Inserir Valor</button>
        </div>
    )
}

export default Form