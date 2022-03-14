import { IProps, IData } from 'classes/PropsInterface'
import { Button, Modal, Form, FormControl } from 'react-bootstrap'
import './../../App.css'

function SearchBar({data}: IProps<IData>) {
   return (
      <Form className="d-flex">
         <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
         />
         <Button className='border-2 fw-bold' variant="outline-success">Search</Button>
      </Form>
   )
}

export default SearchBar