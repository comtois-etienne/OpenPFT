import { IProps, IData } from '../../classes/PropsInterface'
import ModalParameter from './Modals/ModalParameter';
import ModalRoom from './Modals/ModalRoom'
import SearchBar from './SearchBar';
import './../../App.css'

function ModalSelector({data} : IProps<IData>) {
   switch(data.radio.value) {
      case "1": return <SearchBar data={data}/>;
      case "2": return <ModalRoom data={data}/>;
      case "3": return <ModalRoom data={data}/>;
      case "4": return <ModalParameter data={data}/>;
      default: return <SearchBar data={data}/>;
   }
}

export default ModalSelector