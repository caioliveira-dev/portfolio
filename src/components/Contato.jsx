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
                <form action="https://formsubmit.co/mensagensportfolio@gmail.com
" method="POST">
                    <input type="text" placeholder="E-mail" name="email"/>
                    <textarea placeholder="Mensagem..." />
                    <button type="submit"  onSubmit={handleSubmit}>Enviar</button>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value="https://caioliveira-dev.github.io/portfolio/#contato"/>
                </form>
            </div>
            
        </div>
    )
}
