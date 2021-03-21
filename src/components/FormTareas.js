import React, { useState, Fragment } from "react";
import ListaTarea from "./ListaTarea";

const FormTareas = () => {
    //aqui va el codigo de javascript
    //crear un state
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea] = useState('');

    // const guardarTarea=(e)=>{
    //     //obtengo el value del input
    //     //console.log(e.target.value)
    //     //guardo en el state
    //     setTarea(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('prueba');
        let arreglo = tareas;
        arreglo.push(tarea);

        setTareas(arreglo);

    }

    return (
        <Fragment>
            <div className="container my-5 d-flex justify-content-center">
                <form className="w-75" onSubmit={handleSubmit}>
                    <div className="mb-3  d-flex">
                        <input
                            type="text"
                            className=" form-control"
                            placeholder="Agregar una tarea"
                            onChange={(e) => setTarea(e.target.value)}
                        />
                        <button className="btn btn-outline-light" type="submit">Agregar</button>
                    </div>
                </form>
            </div>
            <section className='container w-50 my-5'>
                {/*Invoco al componente Listatarea*/}
                <ListaTarea tareas={tareas} ></ListaTarea>
            </section>
        </Fragment>
    );
};

export default FormTareas;
