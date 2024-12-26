import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import MovDescription from './Components/MovDescription'
import Error from './Components/Error'
import NavigationBar from './Components/NavigationBar'

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/movie/:id' element={<MovDescription />}/>
                <Route path='/*' element={<Error />}/>


        
            </Routes>
        </div>
    )
}

export default Home