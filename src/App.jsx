import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {fetchApiData} from './utils/api.js';
// import actions from homeSlice
import {getApiConfiguration,getGenres} from './store/homeSlice.js';

import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/home/Home.jsx';
import SearchResult from './pages/searchresult/searchResult.jsx';
import Details from './pages/details/Details.jsx';
import Explore from './pages/explore/Explore.jsx';
import PageNotFound from './pages/404/pageNotFound.jsx';




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
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/:mediaType/:id" element = {<Details/>} />
        <Route path="/search/:query" element = {<SearchResult/>} />
        <Route path="/explore/:mediaType" element = {<Explore/>} />
        <Route path="*" element = {<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

