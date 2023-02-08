import { useAuth0 } from '@auth0/auth0-react'
import { ButtonLogin } from '../components/ButtonLogin'

export default function Login() {

    // const { user } = useAuth0()
    // console.log(user)
    // console.log(window.location.origin)

    return (
        <>
            <h1>Sign in</h1>
            <ButtonLogin />
        </>
    )
}
