/* import { useEffect, useState } from "react" */
import envios from "../assets/envios.png";
import asistencia from "../assets/asistencia.png";
import seguro from "../assets/seguro.png";

export const InfoBanner = () => {

    return (
        /* sombra superior en el incio del div */
        <div className="flex flex-col mt-4">
            <div className="flex justify-center gap-4 pt-4 pb-2 border-rojoPrincipal bg-gris1 rounded-t-lg sm:rounded-t-full">
                <h3 className="max-w-24 sm:max-w-64 text-xs sm:text-xl sm:font-medium">¡Informate de nuestras ultimas noticias y ofertas!</h3>
                <input type="email" name="" id="" placeholder="Ingrese su correo..." className="p-2 rounded-sm w-2/5"/>
                <button type="button" className="bg-rojoPrincipal p-3 text-white font-bold rounded-sm">Enviar</button>
            </div>
            <div className="flex flex-col bg-gris1 lg:px-16">
                <div className="flex justify-between mx-2 my-6 sm:mx-32 sm:my-8">
                    <div className="flex flex-col">
                        <div className="m-auto mb-2"><img className="h-12 sm:h-16 md:h-24" src={envios} alt="Envios"/></div>
                        <p className="max-w-48 text-sm sm:text-xl font-semibold text-center">Envíos rápidos a nivel nacional</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-auto mb-2"><img className="h-12 sm:h-16 md:h-24" src={asistencia} alt="Atencion"/></div>
                        <p className="max-w-48 text-sm sm:text-xl font-semibold text-center">Asístencia personalizada 24/7</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="m-auto mb-2"><img className="h-12 sm:h-16 md:h-24" src={seguro} alt="Seguridad"/></div>
                        <p className="max-w-48 text-sm sm:text-xl font-semibold text-center">Productos 100% confiables</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoBanner