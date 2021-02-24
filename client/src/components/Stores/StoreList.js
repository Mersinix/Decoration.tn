import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStores } from '../../js/actions/AllstoreActions'
import { StoreDesignCard } from './StoreDesignCard'
import './StoreList.css'

const StoreList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getStores())
  }, [])
  const stor = useSelector((state) => state.AllstoreReducer.stores)
  return (
    <div className='apphome'
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 40,
        maxWidth: '100%',
        height: 1400,
        alignItems: 'center',
      }}
    >
      {stor &&
        stor.map((stores) => <StoreDesignCard key={stores._id} stores={stores} />)}
    </div>
  )
}
export default StoreList
