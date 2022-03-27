import { IProps, IData, IElement, IParameter, PageLinks, GuidGenerator } from '@classes/PropsInterface'
import '@/App.css'
import BodySelector from './BodySelector'
import {
   BrowserRouter as Router,
   Route,
   Routes,
   Link
} from "react-router-dom";
import { IFCGuidGenerator } from '@classes/Guid';
import { useContext } from 'react';



function Body({ data }: IProps<IData>) {
   
   const generator = useContext(GuidGenerator)
   console.log(generator.generate())
   
   return (
      <>
         <Router>
            <Routes>
               <Route path='/api/test' element={<div>HHH</div>}></Route>
               <Route path={PageLinks.RoomUrl} element={<div>gggg</div>}></Route>
            </Routes>
         </Router>
         <BodySelector data={data} />
      </>
   )
}

export default Body