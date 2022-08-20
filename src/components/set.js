import React from 'react';

function SetList(props) {
    return (
    <div>
        {props.sets.map( sets => {
            return (
            <div key={sets.id}>
                <h2>{sets.setName}</h2>
            </div>
            )
        })}
    </div>
    )
}

export default SetList; 