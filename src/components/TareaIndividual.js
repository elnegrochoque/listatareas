import React from 'react';

const TareaIndividual = (props) => {
    return (
        <div>
            <li className="list-group-item">{props.nombreTarea}</li>
        </div>
    );
};

export default TareaIndividual;