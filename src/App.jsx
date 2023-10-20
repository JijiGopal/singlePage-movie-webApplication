import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

// import actions from homeSlice
import {getApiConfiguration,getGenres} from './store/homeSlice.js';

import {fetchApiData} from './utils/api.js';

function App() {
  const dispatch = useDispatch()
  const {url} = useSelector((state) => state.home );
  console.log(url)

  useEffect(()=>{
    apiTest();
  },[])

  const apiTest = ()=>{
    fetchApiData('/movie/popular')
    .then((res) =>{
      console.log("responsee",res)
      dispatch(getApiConfiguration(res))
    })
  }

  return (
    <div className='App'>
      {url?.total_pages}
    </div>
  )
}

export default App

