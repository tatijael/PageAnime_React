import React from 'react'

const Cards = (props) => {
    // console.log(props)
    return (
    <div className="card mx-3 my-3" style={{width: "18rem"}}>
        <img src={props.attributes.posterImage.small} className="card-img-top" alt="..." />
            <div className="card-body">
    <h5 className="card-title">{props.attributes.canonicalTitle}</h5>
    <p className="card-text"></p>
                <button onClick={props.onClick} className="btn btn-primary">Ver Mas</button>
            </div>
    </div>
    )
}

export default Cards;
