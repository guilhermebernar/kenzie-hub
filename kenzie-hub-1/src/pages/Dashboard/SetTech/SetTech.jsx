import { useState } from "react"
import { ButtonDarkGray, ButtonLightGray, ButtonPink } from "../../../components/Buttons.style"
import{FormDefaut} from "../../../components/Form.style"
import { Buttons, ContainerForm, ContainerFormOff, FormOffTitle, FormTitle } from "./setTech.style"

const SetTech = ({formTechs, setFormTechs, techs, setTechs})=> {
  const [title, setTitle] = useState()
  const [status, setStatus] = useState()
  
  return (<>{formTechs?(
    <ContainerForm>
      <FormDefaut>
        <FormTitle>Inserir Tecnologia</FormTitle>

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
        <Buttons>
            <ButtonPink>Enviar</ButtonPink>
            <ButtonDarkGray onClick={()=>setFormTechs(false)}>Fechar</ButtonDarkGray>
        </Buttons>
      </FormDefaut>
    </ContainerForm>
  ):(
    <ContainerFormOff>
      <FormOffTitle>Tecnologias</FormOffTitle>
      <ButtonLightGray onClick={()=>setFormTechs(true)}>+</ButtonLightGray>
    </ContainerFormOff>
  )
  }</>)
}

export default SetTech