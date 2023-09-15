
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutInfo from "./pages/AboutInfo";
import Music from "./pages/Music";
import PlasticArts from "./pages/PlasticArts";
import Dance from "./pages/Dance";
import Theater from "./pages/Theater";
import Contact from "./pages/Contact";
import User from "./pages/User";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutInfo />}></Route>
          <Route path='/musica' element={<Music />}></Route>
          <Route path='/artesplasticas' element={<PlasticArts />}></Route>
          <Route path='/danza' element={<Dance />}></Route>
          <Route path='/teatro' element={<Theater />}></Route>
          <Route path='/contacto' element={<Contact />}></Route>
          <Route path='/sesion' element={<User />}></Route>
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