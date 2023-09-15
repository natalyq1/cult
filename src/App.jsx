
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutInfo from "./pages/AboutInfo";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Register from "./pages/Register";
import MainServicePage from "./pages/products/MainService";
import Music from "./pages/products/Music";
import Theater from "./pages/products/Theater";
import Dance from "./pages/products/Dance";
import PlasticArts from "./pages/products/PLasticArts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutInfo />}></Route>
          <Route path='/mainService' element={<MainServicePage />}></Route>

          <Route path='/music' element={<Music />}></Route>
          <Route path='/dance' element={<Dance />}></Route>
          <Route path='/plasticart' element={<PlasticArts />}></Route>
          <Route path='/theater' element={<Theater />}></Route>
          <Route path='/contacto' element={<Contact />}></Route>
          <Route path='/sesion' element={<User />}></Route>
          <Route path='/registro' element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
/*

          <Route path='/portafoliodesarrollador/' element={<Home />}></Route>
          <Route path='/jobs' element={<Jobs />}></Route>
          <Route path='/jobs/:id' element={<Job />}></Route>
          <Route path='/studies/:id' element={<Studie />}></Route>
          <Route path='/studies' element={<Studies />}></Route>
          <Route path='/skills' element={<Skills />}></Route>
          <Route path='/*' element={<Error404 />}></Route>
          <Route path='/home' element={<Navigate replace to={("/")} />}></Route>
        </Routes>
*/