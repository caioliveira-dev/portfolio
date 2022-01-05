import './SideMenu.scss'

export default function SideMenu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " + (menuOpen ? "false" : "active")}>
            <ul onClick={() => setMenuOpen(true)}>
                <li>
                    <a href="#intro">Introdução</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
            </ul>
        </div>
    )
}
