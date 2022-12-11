import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react'
import {listarRestaurante} from './restaurantService'

export const Inicio = () => {
    const [restaurantes, setRestaurantes] = useState([])

    useEffect(() => {
        getRestaurantes()
    },[])

    const getRestaurantes = async () => {
        try {
            Swal.fire({ allowOutsideClick: false, text: 'Procesando...' });
            Swal.showLoading();
            const restaurantesFirebase = await listarRestaurante()
            setRestaurantes(restaurantesFirebase)
            Swal.close();
        } catch (error){
            Swal.close();
            console.log(error)
          }
    }
    
  return (
    
    <div className="container-fluid mt-4">
            <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                {
                    restaurantes.map(restaurante => {
                        return (
                            <div className="col" key={restaurante.id}>
                                <div className="card">
                                    <img src={restaurante.imagen} className="card-img-top" alt="Error" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{restaurante.nombre}</h5>
                                        <p className="card-text text-center">{restaurante.direccion}</p>
                                        <p className="card-text text-center"><small className="text-muted">{restaurante.descripcion}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
  )
}


