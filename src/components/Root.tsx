import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header';
const Root = () => {
    return (
        <div style={{width:'400px'}}>
            <Header />
            <nav>
                Studytonight
            </nav>

            <Outlet />

        </div>
    )
}

export default Root