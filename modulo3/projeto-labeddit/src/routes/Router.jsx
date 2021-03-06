import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "../pages/Feed"
import Signup from "../pages/Signup"
import Post from "../pages/Post"
import Error from "../pages/Error"
import Login from "../pages/Login"



const  Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Feed/>}/>
                <Route path={"/login"} element={<Login />}/>
                <Route path={"/signup"} element={<Signup />}/>
                <Route path={"/post/:postId"} element={<Post />}/>
                <Route path={"*"} element={<Error />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router