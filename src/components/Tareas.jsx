import { useState } from "react"


const Tareas = () => {

  const [tarea, seTtarea] = useState()

  return (
    <div>
      <h1 className="text-center">Task List firebase</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <h3>Ingresar Tareas</h3>
          <form>
            <input type="text"
              placeholder="ingrese su tarea"
              onChange={e => seTtarea(e.target.value)}
            />
          </form>
        </div>
        <div className="col-6 text-center">
          <h3>Tareas</h3>
          <ul>
            <li> {tarea}</li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Tareas