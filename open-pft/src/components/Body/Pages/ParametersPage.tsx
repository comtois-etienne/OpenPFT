import { Card, Form, Row, Col, Button } from 'react-bootstrap'
import { IProps, IData, IElement, IParameter, IDataType } from '../../../classes/PropsInterface'
import './../../../App.css'

function ParametersPage({data} : IProps<IData>) {
   return (
      <DisplayType data={data.dataTypes} />
   )
}

function DisplayType({ data }: IProps<IDataType<IElement>[]>) {
   return (
      <div className='my-4'>
         {data.map((variable, i) => (
            <DisplayParameters key={i} data={variable} />
         ))}
      </div>
   )
}

function DisplayParameters({ data }: IProps<IDataType<IElement>>) {
   return (
      <div className='m-4'>
         <Card className='border-2'>
            <Card.Header className='fw-bold'>{data.name} Parameters</Card.Header>
            <Card.Body>
               <DisplayDescription />
               {data.param.values.map((variable, i) => (
                  <DisplayParameter key={i} data={variable} />
               ))}
            </Card.Body>
         </Card>
      </div>
   )
}

function DisplayDescription() {
   return (
      <Form>
         <Row>
            <Col>
               <Form.Group className="mb-0" controlId="formParameter">
                  <Form.Text className="text-muted">
                     Parameter - Used for IFC interchangeability
                  </Form.Text>
               </Form.Group>
            </Col>
            <Col>
               <Form.Group className="mb-0" controlId="formIdentifier">
                  <Form.Text className="text-muted">
                     Identifier - Used for user interface
                  </Form.Text>
               </Form.Group>
            </Col>
            <Col>
               <Form.Group className="mb-0" controlId="formUnit">
                  <Form.Text className="text-muted">
                     Parameter Type - Describes the data type
                  </Form.Text>
               </Form.Group>
            </Col>
            <Col>
               <Form.Group className="mb-0" controlId="formUID">
                  <Form.Text className="text-muted">
                     UID - IFC UID
                  </Form.Text>
               </Form.Group>
            </Col>
            <Col>
            </Col>
         </Row>
      </Form>
   )
}

function DisplayParameter({ data }: IProps<IParameter>) {
   return (
      <div className='my-2'>
         <Form>
            <Row>
               <Col>
                  <Form.Group controlId="formParam">
                     <Form.Control disabled type="text" placeholder="Parameter name" value={data.parameter} />
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group controlId="formIdentifier">
                     <Form.Control type="text" placeholder={data.identifier} />
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group controlId="formUnit">
                     <Form.Control disabled type="text" placeholder={data.unit} />
                  </Form.Group>
               </Col>
               <Col>
                  <Form.Group controlId="formUID">
                     <Form.Control disabled type="text" placeholder={data.ifc_uid} />
                  </Form.Group>
               </Col>
               <Col>
                  <Row>
                     <Col>
                        <Button className='' variant='success'>Save</Button>
                     </Col>
                     <Col>
                        <Button className='' variant='danger'>Delete</Button>
                     </Col>
                  </Row>
               </Col>
            </Row>
         </Form>
      </div>
   )
}

export default ParametersPage