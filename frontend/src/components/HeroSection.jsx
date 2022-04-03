import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection(props) {
    return(
        <section className="container d-flex justify-center align-items-center my-5" style={{height:'80vh',backgroundImage: 'url(./bg-austism-home.png)',backgroundRepeat: 'no-repeat'}}>
                <div className="card mx-auto h-40 w-60 ">
                    <div className="card-body text-center " >
                        <h2 className="card-title">{props.cardTitle}</h2>
                        <h6 className="card-subtitle mb-2 text-muted">{props.cardSubtitle}</h6>
                        <p className="card-text">{props.cardDescription}</p>
                        <Link to="/teste" className="card-link">Fazer Teste</Link>
                    </div>
                </div>
            </section>
    )
}