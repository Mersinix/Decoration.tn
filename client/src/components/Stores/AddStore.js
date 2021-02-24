import React, { useState, useEffect } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addStores } from '../../js/actions/storeActions'
import { Redirect } from 'react-router-dom'
import { getCategorys } from '../../js/actions/categoryActions'

const AddStore = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [store_id, setStore_id] = useState('')
  const [store_Name, setStore_Name] = useState('')
  const [seller, setSeller] = useState('')
  const [image, setImage,] = useState('')
  const [description, setDescription] = useState('')
  const [storePassword, setStorePassword] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('Pic your Category')
  const [cancel, setCancel] = useState(false)
  const dispatch = useDispatch()
  const toggle = () => setDropdownOpen((prevState) => !prevState)
  const categorys = useSelector((state) => state.categoryReducer.categorys)
  const getCat = () => dispatch(getCategorys())
  useEffect(() => {
    getCat()
  }, [])

  const add = () => {
    dispatch(
      addStores({
        store_id,
        store_Name,
        description,
        image,
        category,
        seller,
        storePassword,
        brand,
      }),
    )
    setCancel(!cancel)
  }

  return (
    <>
      {cancel ? (
        <Redirect to="/Storelist" />
      ) : (
        <Form style={{ margin: '100px', height:'300px' }}>
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
              <h4>store_id</h4>
            </Label>
            <Input
              onChange={(e) => setStore_id(e.target.value)}
              value={store_id}
              type="text"
              name="product_id"
              id="exampleprice"
              placeholder="id of Store"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>seller</h4>
            </Label>
            <Input
              onChange={(e) => setSeller(e.target.value)}
              value={seller}
              type="price"
              name="price"
              id="exampleprice"
              placeholder="price of Store"
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
              id="exampleprice"
              placeholder="image of Store"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>description</h4>
            </Label>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              type="description"
              name="description"
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
              type="content"
              name="content"
              id="examplecontent"
              placeholder="content of Store"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>brand</h4>
            </Label>
            <Input
              onChange={(e) => setBrand(e.target.value)}
              value={brand}
              type="images"
              name="images"
              id="exampleimages"
              placeholder="images of Store"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>category</h4>
            </Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Dropdown</DropdownToggle>
              <DropdownMenu onChange={(e) => setCategory(e.target.value)}>
                {categorys &&
                  categorys.map((categor) => (
                    <DropdownItem>{categor.name}</DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
            <Input
              value={category}
              type="text"
              name="category"
              id="examplecategory"
              placeholder="category of Store"
            />
          </FormGroup>

          <Button onClick={add}>Add Store</Button>
          <Button onClick={() => setCancel(!cancel)}>Cancel</Button>
        </Form>
      )}
    </>
  )
}

export default AddStore
