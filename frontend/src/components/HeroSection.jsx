import react from 'react';

export default function HeroSection(props) {
    return(
        <section className="container d-flex justify-center align-items-center my-5" style={{height:'80vh',backgroundImage: 'url(./bg-austism-home.png)',backgroundRepeat: 'no-repeat'}}>
                <div className="card mx-auto h-40 w-60 ">
                    <div className="card-body text-center " >
                        <h2 className="card-title">{props.cardTitle}</h2>
                        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </section>
    )
}