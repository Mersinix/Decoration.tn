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
import { addProducts } from '../../js/actions/productActions'
import { Redirect , Link} from 'react-router-dom'
import { getCategorys } from '../../js/actions/categoryActions'

const AddModal = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [product_id, setProduct_id] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [images, setImages] = useState('')
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
      addProducts({
        product_id,
        title,
        price,
        description,
        content,
        images,
        category,
      }),
    )
    setCancel(!cancel)
  }

  return (
    <>
      {cancel ? (
        <Link to="/list" />
      ) : (
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
              <h4>product_id</h4>
            </Label>
            <Input
              onChange={(e) => setProduct_id(e.target.value)}
              value={product_id}
              type="text"
              name="product_id"
              id="exampleprice"
              placeholder="id of product"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>price</h4>
            </Label>
            <Input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              type="price"
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
              type="description"
              name="description"
              id="exampledescription"
              placeholder="description of product"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>content</h4>
            </Label>
            <Input
              onChange={(e) => setContent(e.target.value)}
              value={content}
              type="content"
              name="content"
              id="examplecontent"
              placeholder="content of product"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">
              <h4>images</h4>
            </Label>
            <Input
              onChange={(e) => setImages(e.target.value)}
              value={images}
              type="images"
              name="images"
              id="exampleimages"
              placeholder="images of product"
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
              placeholder="category of product"
            />
          </FormGroup>

          <Button onClick={add}>Add Product</Button>
          <Button onClick={() => setCancel(!cancel)}>Cancel</Button>
        </Form>
      )}
    </>
  )
}

export default AddModal
