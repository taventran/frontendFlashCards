import React from 'react';

function SetList(props) {

    const setClicked = set => {
        props.setClicked(set)
        props.resetSet()
    }


    return (
    <div className="set-layout">
        {props.sets && props.sets.map( set => {
            return (
            <div key={set.id} className="set-items">
                <h2 onClick={() => setClicked(set)}>{set.setName}</h2>
            </div>
            )
        })}
    </div>
    )
}

export default SetList; 