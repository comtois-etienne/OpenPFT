import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IProps, IData, IElement, IParameter, IDataType } from '../../classes/PropsInterface'
import './../../App.css'
import BodySelector from './BodySelector'

function Body({ data }: IProps<IData>) {
   return (
      <div>
         <BodySelector data={data} />
      </div>
   )
}

export default Body