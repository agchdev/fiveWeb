import React from 'react'
import Header from '../components/layout/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'

const Plantilla = () => {
    return (
        <>
            <Header />
            <main>
            {/* <div className="bg-[url('./assets/noise.jpg')] mix-blend-overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full border pointer-events-none z-150 bg-[length:300px] overflow-hidden opacity-50 select-none bg-center translate-y-0 rotate-[0.001deg]"> 
            </div>*/}
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Plantilla
