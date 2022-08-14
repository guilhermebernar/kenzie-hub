import logo from '../../assets/logo_kenziehub.png'
import { Link } from 'react-router-dom'
import { ButtonDarkGray } from '../../components/Buttons.style'
import { useContext, useEffect, useState } from 'react';
import { Contexts } from '../../providers/Context'
import { MainDashboard } from '../../components/Backgrounds.style';
import { HeaderDashboard, InfoCourseModule, InfoName, Infos } from './Dashboard.style';
import { LogoImg } from '../../components/LogoImg.style';
import SetTech from './SetTech/SetTech';

const Dashboard = ()=> {
  const [ formTechs, setFormTechs ] = useState(false);
  const [ formTechEdit, setFormTechEdit] = useState(false);
  const [ techs, setTechs ] = useState([]);
  const { user } = useContext(Contexts);

  useEffect(()=>{
    function insertTechs(newTechs) {
      setTechs(newTechs)
    }
    insertTechs()

    console.log(user)
  }, [])
  
  return(
    <MainDashboard>
      <HeaderDashboard>
        <LogoImg src={logo} alt="Logo Kenziehub"/>
          <Link replace to="/login">
            <ButtonDarkGray>Sair</ButtonDarkGray>
          </Link>
      </HeaderDashboard>
      <Infos>
        <InfoName>Olá, {user.name}</InfoName>
        <InfoCourseModule>{user.course_module}</InfoCourseModule>
      </Infos>
      <SetTech
        formTechs={formTechs}
        setFormTechs={setFormTechs}
        techs={techs}
        setTechs={setTechs}
      />
      {/* <TechList
        techs={techs}
        setTechs={setTechs}
        formTechEdit={formTechEdit}
        setFormTechEdit={setFormTechEdit}
      /> */}
    </MainDashboard>
  )
}

export default Dashboard