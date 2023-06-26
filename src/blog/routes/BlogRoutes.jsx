import { Navigate, Route, Routes } from "react-router-dom"
import { BlogPage } from "../page/BlogPage"
import { NikePage } from "../page/NikePage"
import { Vans } from "../page/Vans"
import { Adidas } from "../page/Adidas"
import { Puma } from "../page/Puma"

export const BlogRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <BlogPage/> }/>
            <Route path="/nike" element={ <NikePage/> }/>
            <Route path="/vans" element={ <Vans/> }/>
            <Route path="/adidas" element={ <Adidas/> }/>
            <Route path="/puma" element={ <Puma/> }/>
            <Route path="/*" element={ <Navigate to="/" />}/>
        </Routes>
    )
}
