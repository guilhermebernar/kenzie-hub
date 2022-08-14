import { useState } from "react"

const SetTech = ({formTechs, setFormTechs, techs, setTechs})=> {
  const [title, setTitle] = useState()
  const [status, setStatus] = useState()

  return (<>{formTechs?(
    <>
      <button onClick={setFormTechs(true)}>+</button>
    </>
  ):(
    <form>
      <label htmlFor='title'>Título</label>
      <input 
        name='title' 
        type='text'
        onChange={(event) => setTitle(event.target.value)} 

        />
      
      <label htmlFor='status'>Status</label>
      <select name='status' onChange={(event) => setStatus(event.target.value)}>
        <option value='Iniciante'>Iniciante</option>
        <option value='Intermediário'>Intermediário</option>
        <option value='Avançado'>Avançado</option>
      </select>
    </form>
  )
  }</>)
}

export default SetTech