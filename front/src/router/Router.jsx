import { Routes, Route } from "react-router-dom"
import { ClipsPage } from "../pages/ClipsPage"
import { GifPage } from "../pages/GifPage"
import { ProfilePage } from "../pages/ProfilePage"
import { GifProvider } from "../auth/GifProvider"
// import Login from "../pages/login"

export const Router = () => {

    return (

        <GifProvider>
            <Routes>
                {/* <Route path='/' element={<Login />}> */}
                <Route path='/' element={<GifPage />} />
                <Route path='/gif' element={<GifPage />} />
                <Route path='/clip' element={<ClipsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                {/* </Route> */}
            </Routes>
        </GifProvider>

    )
}