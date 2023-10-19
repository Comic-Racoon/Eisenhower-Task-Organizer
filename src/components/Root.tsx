import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
    return (
        <div style={{width:'400px'}}>
            <nav>
                Studytonight
            </nav>

            <Outlet />

        </div>
    )
}

export default Root