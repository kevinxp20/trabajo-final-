import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { listarRestaurante } from './restaurantService'


const Buscar = () => {

    const [valoresFormulario, setValoresFormulario] = useState({});
    const [listado, setListado] = useState([]);
    const [restaurantesFirebase, setRestaurantes] = useState([])
    
    const { ingreso = '' } = valoresFormulario;
    const handleOnChange = (e) => {
        setValoresFormulario({ ...valoresFormulario, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        getRestaurantes()
    }, [])
    const getRestaurantes = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Procesando...' });
            Swal.showLoading();
            const restaurantesFirebase = await listarRestaurante()
            setRestaurantes(restaurantesFirebase)
            Swal.close();

        } catch (error) {
            Swal.close();
            console.log(error)
        }
    }
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setListado(restaurantesFirebase.filter(rest => rest.nombre.toLowerCase().includes(ingreso.toLowerCase())))
    }
    return <>
        <div className="container mt-0">
            <form onSubmit={(e) => handleOnSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Ingrese el Nombre del restaurante: </label>
                    <input type="text" name="ingreso" value={ingreso}
                        className="form-control" onChange={(e) => { handleOnChange(e) }} />

                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>

            </form>
            <div className="container-fluid mt-4">
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {
                        listado.map(listado => {
                            return (
                                <div className="col" key={listado.id}>
                                    <div className="card">
                                        <img src={listado.imagen} className="card-img-top" alt="Error" />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{listado.nombre}</h5>
                                            <p className="card-text text-center">{listado.direccion}</p>
                                            <p className="card-text text-center"><small className="text-muted">{listado.descripcion}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>

    </>
}
export {
    Buscar
}