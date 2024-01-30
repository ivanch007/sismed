import Select from 'react-select'
import { useSelect } from "../hooks/useSelect"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useState } from 'react'


export const GestionCita = () => {

  const { value, manejoOnChange, opcionesAreaMedica, opcionesProfesionales, profesionalOnChange, profesional } = useSelect()
  const [startDate, setStartDate] = useState(new Date());

  const manejoColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";

  }

  const manejoSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <>

      <div className='select-form'>

        <h2 className="subtitulo-formulario"><strong>Selección área médica</strong></h2>


        <form className='container'>
          <label htmlFor="areamedica">Selecciona el area médica: </label>
          <Select
            value={value}
            options={opcionesAreaMedica}
            onChange={manejoOnChange} />

          <p>Has seleccionado: {value ? value.label : 'Ninguna opción seleccionada'}</p>

        </form>



      </div>

      <div className='select-form'>

        <h2> <strong>Selección profesional</strong></h2>

        <div className="profesional">

          <form className='container'>
            <label htmlFor="selecprofesional" className="etiquetas-formulario">Selecciona el profesional</label>
            <Select
              value={profesional}
              options={opcionesProfesionales}
              onChange={profesionalOnChange} />

            <p>Has seleccionado: {profesional ? profesional.label : 'Ninguna opción seleccionada'}</p>

          </form>
        </div>
      </div>


      <div className='select-form'>
        <h2><strong>Seleccione una fecha</strong></h2>
        <form className='container'>
          <DatePicker
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeClassName={manejoColor}
          />
          <p>La fecha y hora seleccionada es: {startDate ? startDate.toLocaleString() : 'Ninguna fecha seleccionada'}</p>
        </form>
      </div>


      <div>
        <form onSubmit={manejoSubmit}>
          <button type='submit' onClick={() => {
            if (value === null && profesional === null) {
              alert("Debe seleccionar todas las opciones")
            } else {
             alert(`Su cita con ${value.label} con el profesional ${profesional.label} en la fecha y hora ${ startDate.toLocaleString()} ha sido asignada`)
            }
          }} className="boton-cita">Seleccionar cita</button>
        </form>


      </div>

    </>

  )
}