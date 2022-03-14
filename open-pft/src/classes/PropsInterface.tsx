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
