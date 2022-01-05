import "./NavBar.scss";
import { AiOutlineLinkedin } from "react-icons/ai";

export default function NavBar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen ? "false" : "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            &lt; CHOF &gt;
          </a>
          <a
            href="https://linkedin.com/in/caio-oliveira-b90993106/"
            className="libox"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin />
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
