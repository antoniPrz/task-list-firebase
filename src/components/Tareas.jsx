import { useEffect, useState } from "react"
import { firebase } from "../firebase"

const Tareas = () => {

  const [tarea, setTarea] = useState("")
  const [tareas, setTareas] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [indicador, setIndicador] = useState("")


  useEffect(() => {

    const obtenerDatos = async () => {

      const db = firebase.firestore()

      try {

        const data = await db.collection("tareas").get()
        // console.log(data)
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setTareas(arrayData)



      } catch (error) {
        console.log(error)

      }

    }
    obtenerDatos()


  }, [])


  const addTarea = (e) => {
    e.preventDefault()
    if (!tarea.trim()) {
      console.log("value de tarea esta vacio")
      return
    }

    setTareas([...tareas, tarea])
    setTarea("")


  }

  const borrarTarea = (identificador) => {

    const arrayFiltrado = tareas.filter((item, index) => index !== identificador)

    console.log(arrayFiltrado)
    setTareas(arrayFiltrado)
  }

  const entrarEnModoEdicion = (task, id) => {

    setModoEdicion(true)
    setTarea(task)
    setIndicador(id)
  }

  const agregarTareaEditada = (e) => {

    e.preventDefault()
    if (!tarea.trim()) {
      console.log("value de tarea esta vacio")
      return
    }

    const arrayEditado = tareas.map((item, index) => index === indicador ? tarea : item)

    setTareas(arrayEditado)
    setTarea("")
    setModoEdicion(false)

  }


  return (
    <div>
      <h1 className="text-center">Task List firebase</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 text-center">
          {
            modoEdicion ? (

              <h3 className="text-center">Editar Tarea</h3>
            )
              :
              (<h3 className="text-center">Ingresar Tarea</h3>)
          }

          <form onSubmit={modoEdicion ? agregarTareaEditada : addTarea}>
            <input
              className="form-control mb-2"
              type="text"
              placeholder="ingrese su tarea"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />


            {
              modoEdicion ?
                (
                  <button
                    className=" btn btn-warning btn-block mb-2"
                    type="submit"
                  >
                    Editar
                  </button>) :
                (
                  <button
                    className=" btn btn-dark btn-block mb-2"
                    type="submit"
                  >
                    Agregar
                  </button>
                )
            }

          </form>
        </div>
        <div className="col-6 ">
          <h3 className="text-center">Tareas</h3>
          <ul className="list-group">
            {
              tareas.map((item, id) => (<li className="list-group-item"
                key={item.id}> {item.contenido}
                <span className="float-right">
                  <button
                    className="btn btn-warning btn-sm  mr-2"
                    onClick={() => entrarEnModoEdicion(item, id)}
                  > editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm "
                    onClick={() => { borrarTarea(id) }}
                  > eliminar
                  </button>
                </span>
              </li>))
            }
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Tareas