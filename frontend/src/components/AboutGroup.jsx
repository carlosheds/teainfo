import React from 'react';

export default function AboutGroup(props) {
    return (
            <div className="card mb-2 mt-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={props.imgSrc} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{props.nameTitle}</h5>
                            <p className="card-text">{props.personText}</p>
                            {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                        </div>
                    </div>
                </div>
                </div>
    )
}