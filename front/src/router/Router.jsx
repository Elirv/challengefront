import { Routes, Route } from "react-router-dom"
import { ClipsPage } from "../pages/ClipsPage"
import { GifPage } from "../pages/GifPage"
import { ProfilePage } from "../pages/ProfilePage"
import { AuthProvider } from "../auth/AuthProvider"
// import Login from "../pages/login"

export const Router = () => {

    return (

        <AuthProvider>
            <Routes>
                {/* <Route path='/' element={<Login />}> */}
                <Route path='/' element={<GifPage />} />
                <Route path='/gif' element={<GifPage />} />
                <Route path='/clip' element={<ClipsPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                {/* </Route> */}
            </Routes>
        </AuthProvider>

    )
}