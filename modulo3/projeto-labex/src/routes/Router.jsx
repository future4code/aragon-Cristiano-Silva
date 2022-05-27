import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Error from "../pages/Error";
import TripDetailsPage from "../pages/TripDetailsPage"

const Router = ()=> {
    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"/admin"} element={<Admin />} />
                <Route path={"admin/:tripId/details"} element={<TripDetailsPage />} />
                <Route path={"*"} element={<Error/>} />   
            </Routes>
        </BrowserRouter>

    )
}
export default Router