import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Conatact from "./Conatact"
import Counter from "./Counter"
import Effect from "./Effect"
import Reducer from "./Reducer"
import Callback from "./Callback"
export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
       <Route path="conatact" element={<Conatact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    <Counter/>
    <Effect/>
    <Reducer/>
    <Callback/>
    </>
  )
}