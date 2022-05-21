import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/login"
import { Menu } from "../pages/menu"

export const AppRouter = () =>{
    return(
        <Router>
            <Routes>
                <Route path="/" exact element={<Login/>}/>
                <Route path="/Menu" exact element={<Menu/>}/>
            </Routes>
        </Router>
    )
}