import React, {useState, useEffect} from 'react'

function Cards(props) {
    if (props.set) {
    const cards = props.set.cards;
    return (
        <React.Fragment>
           { 
            cards.map( card => {
                return ( 
                    <div key={card.id} className="card">
                        <h5 className="card-style">{card.term}</h5>
                        <h5 className="card-style">{card.definition}</h5>
                    </div>
                )
            })
        }
        </React.Fragment>
    )
    }
    
}

export default Cards;