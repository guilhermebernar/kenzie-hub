import logo from '../../assets/logo_kenziehub.png'
import { Link } from 'react-router-dom'
import { ButtonDarkGray } from '../../components/Buttons.style'
import { useContext, useEffect, useState } from 'react';
import { Contexts } from '../../providers/Context'
import { MainDashboard } from '../../components/Backgrounds.style';
import { ContainerTechList, HeaderDashboard, ImgList, InfoCourseModule, InfoList, InfoName, Infos } from './Dashboard.style';
import { LogoImg } from '../../components/LogoImg.style';
import SetTech from './SetTech/SetTech';
import TechBox from './TechList/TechList';
import listNull from '../../assets/listNull.svg'

const Dashboard = ()=> {
  const [ formTechs, setFormTechs ] = useState(false);
  const { user } = useContext(Contexts);
  console.log(user)

  return (
    <MainDashboard>
      <HeaderDashboard>
        <LogoImg src={logo} alt='Logo Kenziehub' />
        <Link replace to='/login'>
          <ButtonDarkGray>Sair</ButtonDarkGray>
        </Link>
      </HeaderDashboard>
      <Infos>
        <InfoName>Olá, {user.name}</InfoName>
        <InfoCourseModule>{user.course_module}</InfoCourseModule>
      </Infos>
      <SetTech formTechs={formTechs} setFormTechs={setFormTechs} />
      {user.techs.length === 0? (
        <ContainerTechList>
          <InfoList>Adicione techs...</InfoList>
          <ImgList src={listNull} alt='Homem sentado escrevendo'/>
        </ContainerTechList>
      ) : (
        <ContainerTechList>
          {user.techs.map((tech, index) => (
            <TechBox 
            key={index} 
            techs={tech}
            />
          ))}
        </ContainerTechList>
      )}
    </MainDashboard>
  );
}

export default Dashboard