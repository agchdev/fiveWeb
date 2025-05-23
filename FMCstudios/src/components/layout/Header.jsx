import React, { useEffect, useRef } from 'react'

const Header = () => {

    const header = useRef()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.current.classList.remove('top-10')
            } else {
                header.current.classList.add('top-10')
            }
        })
    }, [])
    

    return (
        <>
            <div className='bg-black/80 w-full p-2 pb-20 absolute'>
                <div className='w-[80%] mx-auto flex justify-between'>
                    <div className='flex w-[30%] gap-6'>
                        <div
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(-20px)'
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                            className='transition-all overflow-hidden cursor-pointer h-[22px] '
                        >
                            <div className='transition-all duration-400 ease-super'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill='white'>
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill='#ff687f'>
                                    <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(-20px)'
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                            className=' transition-all overflow-hidden cursor-pointer h-[22px] '
                        >
                            <div className='transition-all duration-400 ease-super'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill='white'>
                                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 24 24" fill='#ff687f'>
                                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 6 5 L 18 5 C 18.56503 5 19 5.4349698 19 6 L 19 18 C 19 18.56503 18.56503 19 18 19 L 6 19 C 5.4349698 19 5 18.56503 5 18 L 5 6 C 5 5.4349698 5.4349698 5 6 5 z M 6.7011719 7 L 10.642578 12.632812 L 6.90625 17 L 8.2382812 17 L 11.240234 13.484375 L 13.697266 17 L 17.537109 17 L 13.351562 11.009766 L 16.773438 7 L 15.462891 7 L 12.759766 10.160156 L 10.552734 7 L 6.7011719 7 z M 8.5664062 7.9882812 L 10.052734 7.9882812 L 15.683594 16.011719 L 14.1875 16.011719 L 8.5664062 7.9882812 z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div ref={header} className=' rounded-t-4xl bg-orange-50 z-10 w-full top-0 left-0 right-0 sticky transition-all duration-300 ease'>
                <div className='flex justify-between items-center'>
                    <div className='flex w-[30%] justify-center gap-5'>
                        <div
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(-30px)'
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                            className='transition-all overflow-hidden cursor-pointer h-[32px] '
                        >
                            <div className='transition-all duration-400 ease-super flex flex-col m-0'>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Quienes somos</a>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Quienes somos</a>
                            </div>
                        </div>
                        <div
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(-30px)'
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                            className='transition-all overflow-hidden cursor-pointer h-[32px] '
                        >
                            <div className='transition-all duration-400 ease-super flex flex-col m-0'>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Proyectos</a>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Proyectos</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className='w-[100px] cursor-pointer ease-super relative top-10 hover:-rotate-6 transition-all' src="./src/assets/fiveLogo.png" alt="" />
                    </div>
                    <div className='flex gap-4 items-center justify-center w-[30%]'>
                        <div
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(-30px)'
                            }}
                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                            className='transition-all  overflow-hidden cursor-pointer h-[32px] '
                        >
                            <div className='transition-all duration-400 ease-super flex flex-col m-0'>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Contacto</a>
                                <a href='#' className='uppercase text-2xl font-bebas inline-block '>Contacto</a>
                            </div>
                        </div>
                        <div
                            className='bg-red-800 hover:-translate-y-2 ease-super transition-all uppercase px-8 py-1 rounded-full cursor-pointer font-bebas  text-2xl border-2 flex items-center justify-center'
                            style={{
                                boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.75)'
                            }}
                            onMouseEnter={(e) => {
                                const element = e.currentTarget
                                element.style.boxShadow = '0px 8px 0px 0px rgba(0,0,0,0.55)'
                                
                                const elementText = e.currentTarget.querySelector('div')
                                elementText.querySelector('div').style.transform = 'translateY(-30px)'
                            }}

                            onMouseLeave={(e) => {
                                const element = e.currentTarget
                                element.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0.55)'

                                const elementText = e.currentTarget.querySelector('div')
                                elementText.querySelector('div').style.transform = 'translateY(0px)'
                            }}
                        >
                            <div
                                className='transition-all overflow-hidden cursor-pointer h-[32px] '
                            >
                                <div className='transition-all duration-400 ease-super flex flex-col m-0'>
                                    <a href='#' className='uppercase text-2xl font-bebas inline-block '>Shop</a>
                                    <a href='#' className='uppercase text-2xl font-bebas inline-block '>Shop</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[90%] mx-auto flex justify-between'>
                    <div className='h-0.5 bg-black w-[47%]'></div>
                    <div className='h-0.5 bg-black w-[47%]'></div>
                </div>
            </div>
        </>
    )
}

export default Header
