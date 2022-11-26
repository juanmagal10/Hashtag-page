import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SharedLayout from './pages/SharedLayout';
import SingleService from './pages/SingleService/SingleService';
const {servicesData}=require('./assets/servicesData/servicesData')


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={<Home />}>
          </Route>
          <Route path='/:servicio' element={<SingleService servicios={servicesData} />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
