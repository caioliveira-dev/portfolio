import "./Contato.scss"

export default function Contato() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="contact" id="contato">
            <div className="left">
                <img src="assets/mailbg.jpeg" alt="Contact" />
            </div>
            <div className="right">
                <h2>Contato</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="E-mail" />
                    <textarea placeholder="Mensagem..." />
                    <button type="submit">Enviar</button>
                </form>
            </div>
            
        </div>
    )
}
