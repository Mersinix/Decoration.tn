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
import { EditStores } from '../../js/actions/storeActions'

const EditStore = ({ stores }) => {
  const [store_Name, setStore_Name] = useState(stores.store_Name)
  const [seller, setSeller] = useState(stores.seller)
  const [image, setImage] = useState(stores.image)
  const [description, setDescription] = useState(stores.description)
  const [storePassword, setStorePassword] = useState(stores.storePassword)
  const [brand, setBrand] = useState(stores.brand)
  const [category, setCategory] = useState(stores.category)

  const [modal, setModal] = useState(false)
  const toggle = () => {
    setModal(!modal)
    setStore_Name(stores.store_Name)
    setSeller(stores.seller)
    setDescription(stores.description)
    setImage(stores.image)
    setStorePassword(stores.storePassword)
    setBrand(stores.brand)
    setCategory(stores.category)
  }
  const dispatch = useDispatch()
  const Edit = () => {
    dispatch(
      EditStores(stores._id, {
        store_Name,
        description,
        image,
        category,
        seller,
        storePassword,
        brand,
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
                <h4>store_Name</h4>
              </Label>
              <Input
                onChange={(e) => setStore_Name(e.target.value)}
                value={store_Name}
                type="title"
                name="title"
                id="exampletitle"
                placeholder="name of Store"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>seller</h4>
              </Label>
              <Input
                onChange={(e) => setSeller(e.target.value)}
                value={seller}
                type="text"
                name="price"
                id="exampleprice"
                placeholder="Seller of Store"
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
                placeholder="description of Store"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>image</h4>
              </Label>
              <Input
                onChange={(e) => setImage(e.target.value)}
                value={image}
                type="text"
                name="text"
                id="exampledescription"
                placeholder="description of Store"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>storePassword</h4>
              </Label>
              <Input
                onChange={(e) => setStorePassword(e.target.value)}
                value={storePassword}
                type="text"
                name="content"
                id="examplecontent"
                placeholder="Password of Store"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                <h4>brand</h4>
              </Label>
              <Input
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                type="text"
                name="text"
                id="exampleimages"
                placeholder="Brand of Store"
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

export default EditStore
