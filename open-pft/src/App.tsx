import { useState, useContext } from 'react'
import { BackendCommunicator } from './classes/BackendCommunicator';
import { IParameter, IElement, IDataType, GuidGenerator, DataContext, PageLinks } from './classes/PropsInterface';
import Banner from './components/Banner/Banner'
import Body from './components/Body/Body';
import dataTypes from './data/dataTypes'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { v4 } from 'uuid';
import { IFCGuidGenerator } from '@classes/Guid';

function App() {
   const [generator] = useState(new IFCGuidGenerator())
   const back = new BackendCommunicator()
   const [radioValue, setRadioValue] = useState('1');
   var types: IDataType<IElement>[] = []

   const defaultValue = {
      radio: { value: radioValue, setValue: setRadioValue },
      dataTypes: types
   }

   dataTypes.forEach((t: string) => {
      const [getElements, setElements] = useState<IElement[]>(back.loadElements(t));
      const [getParams, setParams] = useState<IParameter[]>(back.loadParameters(t));
      defaultValue.dataTypes.push(
         {
            name: t,
            state: {
               values: getElements,
               setValues: (e: IElement) => {
                  const updated = back.addElement(t, e)
                  setElements(updated)
               }
            },
            param: {
               values: getParams,
               setValues: (p: IParameter) => {
                  const updated = back.addParameter(t, p)
                  setParams(updated)
               }
            }
         }
      )
   })

   return (
      <GuidGenerator.Provider value={generator}>
         <DataContext.Provider value={{
            data: defaultValue
         }}>
            <div className="App bg-light">
               <Banner />
               <Body data={defaultValue} />
               <div className='py-4'></div>
            </div>
         </DataContext.Provider>
      </GuidGenerator.Provider>

   )
}

export default App
