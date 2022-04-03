import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src='./Logo.png'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav justify-content-evenly text-center">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <Link className="nav-link" to="/teste">Teste</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                        </div>
                    </div>
                </div>
            </nav>
    )
}