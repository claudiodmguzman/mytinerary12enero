import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import Cities from './components/Cities';
import Continents from './components/Continents';
import Access from './components/Access';
import CardLog from './components/CardLog';
import CardSignUp from './components/CardSignUp';
import CardSignIn from './components/CardSignIn';
import Footer from './components/Footer';
import CardTinerarySouthAmerica from './components/CardTinerarySouthAmerica';
import CardTineraryNorthAmerica from './components/CardTineraryNorthAmerica';
import CardTineraryAfrica from './components/CardTineraryAfrica';
import CardTineraryAsia from './components/CardTineraryAsia';
import CardTineraryEurope from './components/CardTineraryEurope';
import CardTineraryOceania from './components/CardTineraryOceania';
// import Prueba from './components/Prueba';
import axios from 'axios'; 


function App() {
  const data=[]

  axios.get("http://localhost:4000/api/datos")
    .then(response => data.push(...response.data.response.cities))
   
  console.log(data)


  
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/prueba' element={<Prueba />} /> */}
        <Route path='/cardLog' element={<CardLog />} />
        <Route path='/cardSignIn' element={<CardSignIn />} />
        <Route path='/cardSignUp' element={<CardSignUp />} />
        <Route path='/cities' element={<Cities data={data} />} />
        <Route path='/continents' element={<Continents />} />
        <Route path='/cardTinerarySouthAmerica' element={<CardTinerarySouthAmerica />} />
        <Route path='/cardTineraryNorthAmerica' element={<CardTineraryNorthAmerica />} />
        <Route path='/cardTineraryAfrica' element={<CardTineraryAfrica />} />
        <Route path='/cardTineraryAsia' element={<CardTineraryAsia />} />
        <Route path='/cardTineraryEurope' element={<CardTineraryEurope />} />
        <Route path='/cardTineraryOceania' element={<CardTineraryOceania />} />
        <Route path='/access' element={<Access />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;



// <img src={process.env.PUBLIC_URL + `/image/cities/${city.name}/${city.images.banner2}`} alt={city.name} />

// return (
//   <>  
//   <div className="cards-like">
//       <div className="container">
//           <div className="row"> 
//               {city.map((city) => {
//                   return (
//                       <div className=" col-12 col-md-6 col-lg-4 col-xl-4">
//                           info card
//                       </div>
//                   )
//               })}
//           </div>
//       </div>
//   </div>
//   </>
                         