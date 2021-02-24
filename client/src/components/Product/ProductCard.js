import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { deleteProducts } from '../../js/actions/productActions'
import EditModal from './EditModal'

export const ProductCard = ({ products }) => {
  const dispatch = useDispatch()
  const del = () => {
    dispatch(deleteProducts(products._id))
  }

  return (
    <div style={{ width: '250px', height: '200px', margin: '5px' }}>
      <Card body inverse color="info">
        <CardTitle tag="h5">title:{products.title}</CardTitle>
        <CardText>{products.price}</CardText>
        <CardText>{products.description}</CardText>
        <CardText>{products.content}</CardText>
        <CardText>{products.images}</CardText>
        <CardText>{products.category}</CardText>
        {/* <CardText>{product.dateCreation.slice(0,5)}/{product.dateCreation.slice(6,8)}</CardText> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={del} color="secondary">
            Delete
          </Button>
          <EditModal products={products} />
        </div>
      </Card>
    </div>
  )
}
