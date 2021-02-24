import React from 'react'
import { useSelector } from 'react-redux'

import Loading from '../utils/loading/Loading'

const Dashboard = () => {
  const user = useSelector((state) => state.authReducer.user)
  //   const pay = useSelector((state) => state.authReducer.msg);

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Loading />
      </div>
    )
  }

  return (
    <div>
      
    </div>
  )
}

export default Dashboard
