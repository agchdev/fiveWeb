import React, { useEffect, useRef } from 'react'

const TextChange = () => {
    const textChange = useRef();
    const imgText = useRef();
    const circle = useRef();

    const animationInicial = () => {
        const el = imgText.current;
        if (!el) return;
        el.style.transform = 'translateY(-5px) scale(.7)';
        setTimeout(() => {
        // Vuelta al estado inicial
        el.style.transform = 'translateY(100px) scale(0)';
        circle.current.classList.add('overflow-hidden');
        }, 2500);
      };
      
    useEffect(() => {
        const srcImgsText = ["./src/assets/person.png", "./src/assets/cam.png", "./src/assets/web.png"]
        const text = textChange.current.querySelector('div');
        let valor = 0;
        let i = 0; // Variable auxiliar
        setInterval(() => {
            valor === 102 ? valor = 0 : valor += 51
            text.style.transform = `translateY(-${valor}px)`;
            imgText.current.src = srcImgsText[i]
            console.log(i)
            console.log(imgText.current.src)
            i === 2 ? i = 0 : i++;
        }, 3000)
        setInterval(animationInicial, 3000)
    }, [])
    return (
        <div className='flex justify-center items-center pt-20 gap-10'>
            {/* AQUI VA EL PRIMER TEXTO Y EL BOCADILLO */}
            <h2 className='font-anton text-[12rem] font-bold text-neutral-900'>LET'S CHANGE</h2>
            <div className=''>
                <div className='h-full border py-6 flex justify-between gap-40 items-center rounded-full px-5 bg-red-500 text-white'>
                    <div ref={textChange} className='ml-15 text-4xl h-15 transition-all duration-400 ease-super overflow-hidden ease-in-out mb-1'>
                        <div className='mt-3 h-10 transition-all duration-400 ease-super font-playfair flex flex-col gap-3'>
                            <p>WEB DESING!</p>
                            <p>MARKETING!</p>
                            <p>FILMMAKING!</p>
                        </div>
                    </div>
                    <div>
                        <div className='rounded-full w-[120px] h-[120px] bg-neutral-900 flex justify-center items-center relative'>
                            <div ref={circle} className='w-[110px] rounded-full h-[110px] bg-neutral-900 border-red-800 border-2 overflow-hidden relative'>
                                <img ref={imgText} className='relative top-1  transition-all duration-500' src="./src/assets/web.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextChange
