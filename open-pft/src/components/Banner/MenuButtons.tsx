import { ButtonGroup, ToggleButton } from 'react-bootstrap'
import { IProps, IData, IState } from '../../classes/PropsInterface'
import radios from '../../data/radios'
import './../../App.css'

function MenuButtons({ data }: IProps<IState<string>>) {
   const radioValue = data.value
   const setRadioValue = data.setValue

   return (
      <ButtonGroup>
         {radios.map((radio, idx) => (
            <ToggleButton
               key={idx}
               id={`radio-${idx}`}
               type="radio"
               variant="outline-light"
               className="fw-bold border-2 border-dark px-3 rounded-3"
               name="radio"
               value={radio.value}
               checked={radioValue === radio.value}
               onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
               {radio.name}
            </ToggleButton>
         ))}
      </ButtonGroup>
   )
}

export default MenuButtons