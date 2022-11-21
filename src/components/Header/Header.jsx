import './HeaderStyle.css'

const Header = ({ setPage }) => {
    return (
        <div className="header">
            <div className="container">
                <h1 className='logo'><span>Nu</span> Kenzie</h1>
                <button onClick={() => setPage("inicio")}>Início</button>
            </div>
        </div>
    )
}

export default Header
