import { BrowserRouter, Route, Routes } from "react-router-dom"
import Student from "../Components/Student"
import Contact from "../Components/Contact"
import Home from "../Components/Home"


const Routers = () =>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element = {< Home/>}/>
                    <Route path="Student-Details" element = {<Student/>}/>
                    <Route path="Contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
       
    )
}

export default Routers