import { IProps, IData } from '../../../classes/PropsInterface'
import { useState, useCallback } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './../../../App.css'

function ModalVariable({data}: IProps<IData>) {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleSave = (d) => {
      console.log(d)
      setShow(false);
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
               <Modal.Title>New Room</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               data
            </Modal.Body>
            <Modal.Footer className='border-0'>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary" onClick={handleSave}>
                  Save
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}

export default ModalVariable