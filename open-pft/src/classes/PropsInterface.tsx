import { createContext } from "react"
import { IGuidGenerator } from "./Guid"

export interface IProps<T> {
   data: T
}

export interface IParameter {
   parameter: string,
   identifier: string,
   unit: string,
   ifc_uid: string
}

export interface IVariable {
   parameter: string,
   value: string
}

export interface IElement {
   variables: IVariable[]
}

export interface IBackendState<T> {
   values: T[],
   setValues: (item: T) => void
}

export interface IData {
   radio: IState<string>
   dataTypes: IDataType<IElement>[]
}

export interface IDataType<T> {
   name: string
   state: IBackendState<T>
   param: IBackendState<IParameter>
}

export interface IState<T> {
   value: T,
   setValue: React.Dispatch<React.SetStateAction<T>>
}

export interface IDropdownState {
   value: string,
   setValue: React.Dispatch<React.SetStateAction<string>>,
   values: string[]
}

export interface IDataContext {
   data: IData
}

export const DataContext = createContext<IDataContext>({
   data: {
      radio: {
         value: '',
         setValue: () => '',
      },
      dataTypes: []
   }
});

export const PageLinks = {
   RoomUrl: '/api/room'
}

export const GuidGenerator = createContext<IGuidGenerator>({
   generate: () => ''
});