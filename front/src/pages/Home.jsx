import React from 'react'

export const Home = () => {

    const { isAuthenticated } = useAuth0();

    return (
        <div className="App">
            <header className="App-header">
                {isAuthenticated ?
                    <>
                        <Profile />
                        <ButtonLogout />
                    </>
                    : <ButtonLogin />
                }
            </header>
        </div>
    )
}
