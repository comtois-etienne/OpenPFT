import { IParameter, IVariable, IElement } from './PropsInterface'
import defaultProjectParam from '../data/projectParam'
import defaultRoomParam from '../data/roomParam'
import defaultSpaceParam from '../data/spaceParam'

class BackendCommunicator {
   private static projectParameters: IParameter[] = defaultProjectParam
   private static roomParameters: IParameter[] = defaultRoomParam
   private static spaceParameters: IParameter[] = defaultSpaceParam

   private static project: IElement[] = []
   private static rooms: IElement[] = []
   private static spaces: IElement[] = []

   loadParameters(type: string): IParameter[] {
      switch(type) {
         case 'Project': return BackendCommunicator.projectParameters
         case 'Room': return BackendCommunicator.roomParameters
         case 'Space': return BackendCommunicator.spaceParameters
         default: return [] 
      }
   }

   loadElements(type: string): IElement[] {
      switch(type) {
         case 'Project': return BackendCommunicator.project
         case 'Room': return BackendCommunicator.rooms
         case 'Space': return BackendCommunicator.spaces
         default: return [] 
      }
   }

   addParameter(type: string, data: IParameter): IParameter[] {
      switch(type) {
         case 'Project': BackendCommunicator.projectParameters.push(data); break;
         case 'Room': BackendCommunicator.roomParameters.push(data); break;
         case 'Space': BackendCommunicator.spaceParameters.push(data); break;
      }
      return [...this.loadParameters(type)]
   }

   addElement(type: string, data: IElement): IElement[] {
      switch(type) {
         case 'Project': BackendCommunicator.project = [data]; break;
         case 'Room': BackendCommunicator.rooms.push(data); break;
         case 'Space': BackendCommunicator.spaces.push(data); break;
      }
      return [...this.loadElements(type)]
   }

   // TEST

   static getDefaultElement(): IElement {
      var json =
         [
            {
               parameter: "name",
               value: "piece"
            },
            {
               parameter: "numero",
               value: "100"
            },
         ]
      return {variables: json}
   }

}



export { BackendCommunicator }