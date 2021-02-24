import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './story.css'
import { getMyProducts } from '../../../js/actions/productActions'
import { Carddesign } from '../../xdesign/Carddesign'
import '../../../App.css'
import Loading from '../../utils/loading/Loading'

const Story = () => {
  const dispatch = useDispatch()

  const mystore = useSelector((state) => state.storeReducer.stor)
  const store = useSelector((state) => state.storeReducer.stor.store_Name)
  // const storeName=useSelector((state) => state.AllstoreReducer.stores)
  const prod = useSelector((state) => state.productReducer.products.products)

  useEffect(() => {
    dispatch(getMyProducts())
  }, [])

  if (!mystore) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading />
      </div>
    )
  }

  return (
    <div className="apphome">
      <h1 className="mb-3 ml-4">My Store: {mystore.store_Name}</h1>
      <div
        className="apphome"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: 40,
          maxWidth: '100%',
          height: 1800,
          alignItems: 'center',
        }}
      >
        {prod &&
          prod.map((products) => (
            <Carddesign key={products._id} products={products} />
          ))}
      </div>
    </div>
  )
}

export default Story
