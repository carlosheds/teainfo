import React from 'react';

export default function Section(props) {
    function hasList() {
        const list = [props.item1, props.item2, props.item3,props.item4]
        if (!list[3]) {
            list.pop(3)
        }
        const listItems = list.map((item) =>
            <li>{item}</li>
        )
        if (props.list > 0) {

            return (
                <ul>{listItems}</ul>
            )
        }

    }


    return (

        <section className="">
            <div className="container row my-5 py-5">
                <div className="col"><img src={props.img} alt="" style={{ width: '500px' }} /></div>
                <div className="col">
                    <h3>{props.title}</h3>
                    <h5>{props.subtitle}</h5>
                    <p>{props.text}</p>
                    {props.font ? <span>Fonte: </span> : ""}
                    <a href={props.font} target="_blank" >{props.font}</a>
                    {hasList()}
                </div>
            </div>
            {/* <div className="container row flex-row-reverse my-5 py-5">
                <div className="col"><img src={props.img} alt="" style={{ width: '500px' }} /></div>
                <div className="col">
                    <h3>{props.title}</h3>
                    <h5>{props.subtitle}</h5>
                    <p>{props.text}</p>
                    <span>Fonte: </span><a href={props.font} target="_blank" >{props.font}</a>
                </div>
            </div> */}
        </section>
    )
}