import React from 'react';
import "./Intersection.css";

export default function Intersection(props) {
    return(
        <section className="container-fluid bg-primary intersection text-center d-flex flex-column align-items-center justify-content-center" >
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}