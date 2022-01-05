import React from 'react';
import './Intro.scss';
import { Typewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
    return (
        <div className="introbox" id="intro">
            <div className="introtxt">
            <h2>Olá, eu sou</h2>
            <h1>Caio Oliveira</h1>
            <h3>Desenvolvedor{" "}<br/>
                <span className="typer">
                    <Typewriter 
                    loop
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    words={["Front-end...", "Back-end...", "Full-Stack!"]}                    
                    />
                    <Cursor />
                </span>
            </h3>
            </div>
        </div>
    )
}
