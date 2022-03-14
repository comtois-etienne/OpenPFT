import { IProps, IData } from '../../classes/PropsInterface'
import Body from "./Body"
import './../../App.css'
import ProjectPage from './Pages/ProjectPage'
import RoomsPage from './Pages/RoomsPage'
import SpacesPage from './Pages/SpacesPage'
import ParametersPage from './Pages/ParametersPage'

function BodySelector({data} : IProps<IData>) {
   switch(data.radio.value) {
      case '1': return <ProjectPage data={data}/>
      case '2': return <RoomsPage data={data}/>
      case '3': return <SpacesPage data={data}/>
      case '4': return <ParametersPage data={data}/>
      default: return <ProjectPage data={data}/>;
   }
}

export default BodySelector