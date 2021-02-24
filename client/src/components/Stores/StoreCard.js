import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { deleteStores } from '../../js/actions/storeActions'
import EditStore from './EditStore'

export const StoreCard = ({ stores }) => {
  const dispatch = useDispatch()
  const del = () => {
    dispatch(deleteStores(stores._id))
  }

  return (
    <div style={{ width: '250px', height: '200px', margin: '5px' }}>
      <Card body inverse color="info">
        <CardTitle tag="h5">title:{stores.store_Name}</CardTitle>
        <CardText>{stores.seller}</CardText>
        <CardText>{stores.description}</CardText>
        <CardText>{stores.brand}</CardText>
        <CardText>{stores.category}</CardText>
        {/* <CardText>{product.dateCreation.slice(0,5)}/{product.dateCreation.slice(6,8)}</CardText> */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={del} color="secondary">
            Delete
          </Button>
          <EditStore stores={stores} />
        </div>
      </Card>
    </div>
  )
}
