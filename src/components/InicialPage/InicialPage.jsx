import "./InicitalPageStyle.css"
import illustration from '../../img/illustration.svg'


const InitialPage = ({ setPage }) => {
    return (
        <body id="initialPageBody">
            <div className="leftPart">
                <h1 className='logoInitial'><span>Nu</span> Kenzie</h1>
                <h2 className="logo">Centralize o controle das suas finanças</h2>
                <p className="headline">de forma rápida e segura</p>
                <button onClick={() => setPage("dashboard")}>Iniciar</button>
            </div>
            <img src={illustration} alt="Ilustração Alternativa" />
        </body> 
    )
}

export default InitialPage