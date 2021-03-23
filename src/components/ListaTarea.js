import React, { useState } from "react";
import TareaIndividual from "./TareaIndividual";

const ListaTarea = (props) => {
    console.log(props.tareas);
    return (
        <div>
            <ul className="list-group">
                {props.tareas.map((dato, indice) => (
                    <TareaIndividual nombreTarea={dato} key={indice}></TareaIndividual>
                ))}
            </ul>
        </div>
    );
};

export default ListaTarea;
