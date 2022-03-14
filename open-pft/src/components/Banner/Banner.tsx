import { Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IProps, IData } from '../../classes/PropsInterface'
import MenuButtons from './MenuButtons';
import ModalSelector from './ModalSelector';
import './../../App.css'

function Banner({ data }: IProps<IData>) {
   return (
      <div className='bg-dark px-4 p-3 d-flex flex-content-between'>
         <div>
            <Title />
            <MenuButtons data={data.radio} />
         </div>
         <div className="ms-auto">
            <ModalSelector data={data} />
         </div>
      </div>
   )
}

function Title() {
   return (
      <span>
         <Navbar.Brand className="fw-bolder text-success">OpenPFT</Navbar.Brand>
         <span className='px-4'></span>
      </span>
   )
}

export default Banner