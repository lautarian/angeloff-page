import "./App.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/Catalogo_clientes.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import { PropiedadesCatalogo } from './propiedadesCat';
import { Login } from './login.js'
import { ReservarCita } from './recervarCita';
import { Conocenos } from "./conocenos";
import { Nosotros } from "./nosotros";
import { Comercializar } from "./comercializar";
import { Reportes } from "./reportes";


import {BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
   Link,
   Oulet
  } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/PropiedadesCatalogo" element={<PropiedadesCatalogo />} />
      <Route path="/ReservarCita" element={<ReservarCita />} />
      <Route path="/Conocenos" element={<Conocenos />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/Comercializar" element={<Comercializar />}/>
      <Route path="/Reportes" element={<Reportes />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

/*
function Home(){
  return(
    
    
  );
}
*/


reportWebVitals();
