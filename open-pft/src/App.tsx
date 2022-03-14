import { useState } from 'react'
import { BackendCommunicator } from './classes/BackendCommunicator';
import { IParameter, IElement, IDataType } from './classes/PropsInterface';
import Banner from './components/Banner/Banner'
import Body from './components/Body/Body';
import dataTypes from './data/dataTypes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
   const [radioValue, setRadioValue] = useState('1')
   var types: IDataType<IElement>[] = []

   const data = {
      radio: { value: radioValue, setValue: setRadioValue },
      dataTypes: types
   }

   dataTypes.forEach((t: string) => {
      const [getElements, setElements] = useState<IElement[]>(new BackendCommunicator().loadElements(t));
      const [getParams, setParams] = useState<IParameter[]>(new BackendCommunicator().loadParameters(t));
      data.dataTypes.push(
         {
            name: t,
            state: {
               values: getElements,
               setValues: (e: IElement) => {
                  const updated = new BackendCommunicator().addElement(t, e)
                  setElements(updated)
               }
            },
            param: {
               values: getParams,
               setValues: (p: IParameter) => {
                  const updated = new BackendCommunicator().addParameter(t, p)
                  setParams(updated)
               }
            }
         }
      )
   })

   return (
      <div className="App bg-light">
         <Banner data={data} />
         <Body data={data} />
         <div className='py-4'> </div>
      </div>
   )
}

export default App
