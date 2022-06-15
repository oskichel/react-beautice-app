import { Route, Routes, Outlet} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import Footer from "./Components/Footer/Footer";
import Home from './Components/Home/Home';
import Doctors from './Components/Doctors/Doctors';
import Service from './Components/Service/Service';
import Contact from "./Components/Contact/Contact";

function App() {
  return (
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'service'} element={<Service/>}/>
          <Route path={'contact'} element={<Contact/>}/>
          <Route path={'doctors'} element={<Doctors/>}/>
        </Route>
      </Routes>
  );
}


function Layout() {
  return (
      <div className="App">
        <Header/>
        <main className={'content'}>
          {}
          <Outlet/>
        </main>
        <Footer/>
      </div>
  )
}


export default App;