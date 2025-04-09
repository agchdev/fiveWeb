import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

const Plantilla = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Plantilla
