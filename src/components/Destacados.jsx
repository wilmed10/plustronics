/* import { useEffect, useState } from "react" */
import flechaAbajo from "../assets/flechaAbajo.png";
/* import arduino from "../assets/ARDUINO_UNO_P.png"; */
import destacado from "../assets/destacado2.webp";

export const Destacados = () => {

    return (
        <div className="flex flex-col mx-2 mt-6 sm:mx-16 sm:mt-12 lg:px-16">
            <div className="flex m-auto items-center">
                <div className=""><img className="h-3 sm:h-6" src={flechaAbajo} alt="Logo Empresa"/></div>
                <a href="#destacados" className="m-auto font-bold text-md mx-5 sm:text-3xl">Productos Destacados</a>
                <div className=""><img className="h-3 sm:h-6" src={flechaAbajo} alt="Logo Empresa"/></div>
            </div>
            <div className="flex mt-6 sm:mt-14 gap-4 justify-between">
                <a href="#/buscar" className="w-64 shadow-md p-4" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4 hidden sm:inline-block" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4 hidden sm:inline-block" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
            </div>
            <div className="flex mt-4 mb-10 gap-4 justify-between">
                <a href="#/buscar" className="w-64 shadow-md p-4" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4 hidden sm:inline-block" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
                <a href="#/buscar" className="w-64 shadow-md p-4 hidden sm:inline-block" >
                    <img className="w-64" src={destacado} alt="..."/>
                    <p className="text-center">Microcontrolador Arduino</p>
                    <p className="font-bold text-center">$20,000.00</p>
                </a>
            </div>
        </div>
    )
}

export default Destacados

/* <div className="grid grid-cols-4 gap-x-6 my-10 space-between">
    <a href="#/buscar" className="w-64" >
        <img className="h-full" src={destacado} alt="..."/>
    </a>
    <a href="#/buscar" className="w-64 justify-self-center" >
        <img className="h-full" src={destacado} alt="..."/>
    </a>
    <a href="#/buscar" className="w-64 justify-self-center" >
        <img className="h-full" src={destacado} alt="..."/>
    </a>
    <a href="#/buscar" className="w-64 justify-self-center" >
        <img className="h-full" src={destacado} alt="..."/>
    </a>
</div> */