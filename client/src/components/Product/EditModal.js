/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import { useDispatch } from 'react-redux'
import { EditProducts } from '../../js/actions/productActions'

const EditModal = ({ products }) => {
  const [title, setTitle] = useState(products.title)
  const [price, setPrice] = useState(products.price)
  const [description, setDescription] = useState(products.description)
  const [store, setStore] = useState(products.store)
  const [images, setImages] = useState(products.images)
  const [category, setCategory] = useState(products.category)

  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
    setTitle(products.title)
    setPrice(products.price)
    setDescription(products.description)
    setContent(products.store)
    setImages(products.images)
    setCategory(products.category)
  }
  const dispatch = useDispatch()
  const Edit = () => {
    dispatch(
      EditProducts(products._id, {
        title,
        price,
        description,
        store,
        images,
        category,
      }),
    )
    toggle()
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Edit Contact
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit your Contact</ModalHeader>
        <ModalBody>
          <Form style={{ margin: '100px' }}>
            <FormGroup>
              <Label for="exampleEmail">
                <h4>title</h4>
              </Label>
              <Input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="title"
                name="title"
                id="exampletitle"
                placeholder="name of product"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>price</h4>
              </Label>
              <Input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
                name="price"
                id="exampleprice"
                placeholder="price of product"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>description</h4>
              </Label>
              <Input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
                name="description"
                id="exampledescription"
                placeholder="description of product"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>store</h4>
              </Label>
              <Input
                onChange={(e) => setContent(e.target.value)}
                value={store}
                type="text"
                name="store"
                id="examplestore"
                placeholder="store of product"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>images</h4>
              </Label>
              <Input
                onChange={(e) => setImages(e.target.value)}
                value={images}
                type="image"
                name="images"
                id="exampleimages"
                placeholder="images of product"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>category</h4>
              </Label>
              <Input
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                type="text"
                name="category"
                id="examplecategory"
                placeholder="category of product"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Edit}>
            Edit Contact
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default EditModal
