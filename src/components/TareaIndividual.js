import React from 'react';



const TareaIndividual = (props) => {
    return (
        <div>
            <li className="list-group-item d-flex justify-content-between">{props.nombreTarea}
            <button className="btn btn-outline-danger"
            onClick={()=>props.borrarTarea(props.nombreTarea)}>Borrar</button>
            </li>
        </div>
    );
};

export default TareaIndividual;