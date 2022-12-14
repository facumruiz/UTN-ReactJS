import { Route, Routes } from "react-router-dom"

import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import NotFound from '../Pages/NotFound';
import Home from '../Pages/Home'
import Contador from '../Pages/Contador';
import Detalle from "../Pages/Detalle";
function Public(){
    return(
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contador' element={<Contador />} />
          <Route path='/alta' element={<Registro />} />
          <Route path='/ingresar' element={<Login />} />
          <Route path='/producto/:id' element={<Detalle />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Public