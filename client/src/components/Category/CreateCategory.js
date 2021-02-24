import React, { useState,useEffect } from 'react'
import  { useSelector, useDispatch } from 'react-redux'
import {addCategorys} from '../../js/actions/categoryActions'
import {EditCategorys} from '../../js/actions/categoryActions'
import {deleteCategorys} from '../../js/actions/categoryActions'
import {getCategorys} from '../../js/actions/categoryActions'
import './categories.css'
function CreateCategory() {
  const categorys = useSelector((state) => state.categoryReducer.categorys)
  const [category, setCategory] = useState('')
  const [onEdit, setOnEdit] = useState(false)
  const [id, setID] = useState('')
  const dispatch = useDispatch()
  const createCat = () => dispatch(addCategorys())
  const getCat = () => dispatch(getCategorys())
  useEffect(() => {
    getCat()
  }, [])

  const deleteCategory = async id =>{
      
   await dispatch(deleteCategorys(id))
}

  return (
    <div className="categories">
      <form onSubmit={createCat}>
        <label htmlFor="category">Category</label>
        <input
        placeholder='New Category'
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />

       {onEdit ?
        <button type="submit" onClick={() => dispatch(EditCategorys(category._id, category.name))}>EDIT</button> :
        <button type="submit" onClick={() => dispatch(addCategorys(category._id, category.name))}>ADD</button>}
      </form>

      <div className="col">
      {categorys.map((category) => (
        
          <div className="row" key={category._id}>
            <p>{category.name}</p>
            <div>
              <button onClick={() => setOnEdit(!onEdit)}>
                Edit
              </button>
              <button onClick={() => dispatch(deleteCategory(category._id))}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default CreateCategory
