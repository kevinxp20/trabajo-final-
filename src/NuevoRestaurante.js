import React, { useState } from 'react'
import {crearRestaurante} from './restaurantService'
import Swal from 'sweetalert2';

export const NuevoRestaurante = () => {
  const [ valorForm, setValorForm ] = useState({});
  const { nombre = '', descripcion = '', direccion = '', imagen = '' } = valorForm;


  const handleOnChange = (e) => {
    setValorForm({ ...valorForm, [e.target.name]: e.target.value });
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault(); 
    console.log(valorForm);
    try {
      Swal.fire({ allowOutsideClick: false, text: 'Procesando...' });
      Swal.showLoading();
      await crearRestaurante(valorForm)
      Swal.close();
      console.log('Restaurante Creado')
      setValorForm({Nombre: '', Descripción: '', Dirección: '', Imagen: ''})
    }catch (error){
      Swal.close();
      console.log(error)
    }
  }

  return (
    <div className="container-fluid2 mt-0">
      <div class="col-lg-6">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="mb-3"><br></br>
          <label className="form-label">Nombre </label>
          <input required type="text" name="nombre" value={nombre} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <input required type="text" name="descripcion" value={descripcion} 
              className="form-control" onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input required type="text" className="form-control" name='direccion' 
              value={ direccion } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input required type="url" className="form-control" name='imagen' 
              value={ imagen } onChange={ (e) => { handleOnChange(e) } } />
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
      </div>
    </div>
  )
}