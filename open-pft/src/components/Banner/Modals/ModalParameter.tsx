import { useState, useCallback } from 'react'
import { Button, Modal, Dropdown, Form, Row, Col } from 'react-bootstrap'
import { IProps, IDropdownState, IData } from '../../../classes/PropsInterface'
import { IParameter } from '../../../classes/PropsInterface'
import unitsImport from '../../../data/units'
import dataTypes from '../../../data/dataTypes'
import '../../../App.css'

function ModalParameter({ data }: IProps<IData>) {
   const [show, setShow] = useState(false)
   const [error, setError] = useState('')

   const types = dataTypes
   const units = unitsImport
   const [type, setType] = useState("")
   const [unit, setUnit] = useState("")
   const [param, setParam] = useState("")
   const [identifier, setIdentifier] = useState("")
   const [pft_uid, setPft_Uid] = useState("")
   var newParam: IParameter

   const handleClose = () => {
      setShow(false)
   }

   const handleShow = () => {
      setShow(true)
      setType("Select category")
      setUnit("Select parameter type")
      setParam("")
      setIdentifier("")
      setPft_Uid('00000000000000000000000000')
   }

   const handleSave = (d) => {
      newParam = {
         'parameter': param,
         'identifier': identifier,
         'unit': unit,
         'ifc_uid': pft_uid
      }

      if (isParameterValid(newParam)) {
         data.dataTypes.forEach(e => {
            if (type === e.name) {
               console.log(e.name)
               e.param.setValues(newParam)
               console.log(newParam)
            }
         })
         setShow(false)
      }
      // todo indiquer quelle erreur
   }

   const isParameterValid = (param: IParameter): boolean => {
      return (
         param.parameter != '' &&
         param.identifier != '' &&
         param.unit != "Select parameter type" &&
         type != "Select category"
      )
   }

   return (
      <>
         <Button className='border-2 fw-bold' variant="outline-success" onClick={handleShow}>+</Button>

         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
         >
            <Modal.Header className='border-0' closeButton>
               <Modal.Title>New Parameter</Modal.Title>
            </Modal.Header>

            <Modal.Body>
               <Form>

                  <Form.Group className="mb-3 pb-3" controlId="formParameter">
                     <Row>
                        <Col>
                           <DropdownParameter data={{ value: type, setValue: setType, values: types }} />
                        </Col>
                        <Col>
                           <DropdownParameter data={{ value: unit, setValue: setUnit, values: units }} />
                        </Col>
                     </Row>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formParameter">
                     <Form.Control type="text" placeholder="Parameter" value={param} onChange={e => setParam(e.target.value)} />
                     <Form.Text className="text-muted">
                        Used for IFC interchangeability
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formIdentifier">
                     <Form.Control type="text" placeholder="Identifier" value={identifier} onChange={e => setIdentifier(e.target.value)} />
                     <Form.Text className="text-muted">
                        Used for user interface
                     </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formUID">
                     <Form.Control disabled type="text" placeholder={pft_uid} />
                     <Form.Text id='disabledSelect' className="text-muted">
                        IFC UID
                     </Form.Text>
                  </Form.Group>

               </Form>
            </Modal.Body>

            <Modal.Footer className='border-0'>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="success" onClick={handleSave}>
                  Add
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

function DropdownParameter({ data }: IProps<IDropdownState>) {
   const selected = data.value
   const setSelected = data.setValue
   const options = data.values

   const handleSelect = (d) => {
      setSelected(d)
   }

   return (
      <Dropdown onSelect={handleSelect}>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selected}
         </Dropdown.Toggle>
         <Dropdown.Menu>
            {options.map((option, i) => (
               <Dropdown.Item key={i} eventKey={option}>{option}</Dropdown.Item>
            ))}
         </Dropdown.Menu>
      </Dropdown>
   )
}

export default ModalParameter