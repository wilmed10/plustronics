/* import { useEffect, useState } from "react" */

export const Footer = () => {

    return (
        <div className="flex flex-col bg-rojoPrincipal">
            <div className="flex py-8 justify-between mx-3 text-white text-sm lg:px-16">
                <div className="flex-col mb-3 sm:text-lg font-light sm:mb-0">
                    <a href="#"><p className="font-bold">Cuenta</p></a>
                    <a href="#"><p className="">Informacion personal</p></a>
                    <a href="#"><p className="">Pedidos</p></a>
                    <a href="#"><p className="">Lista de deseos</p></a>
                </div>
                <div className="flex-col mb-3 sm:text-lg font-light sm:mb-0">
                    <p className="font-bold">Nuestra empresa</p>
                    <a href="#"><p className="">Envíos</p></a>
                    <a href="#"><p className="">Terminos y condiciones</p></a>
                    <a href="#"><p className="">Formas de pago</p></a>
                    <a href="#"><p className="">Sobre nosotros</p></a>
                </div>
                <div className="flex-col sm:text-lg font-light mb-3 sm:mb-0 sm:text-right">
                    <p className="font-bold ">Información de la tienda</p>
                    <p className="">Plustronics S.A.S</p>
                    <p className="">Barranquilla, Colombia</p>
                    <p className="">Avenida alpha, 123 street</p>
                    <p className="">Tel: 3000000000</p>
                    <p className="">correo: ventas@plustronics.com</p>
                </div>
            </div>
            <div className="flex justify-center bg-gris1 text-sm sm:text-md">
                <p>Página Web desarrollada por Wilson Medina - 2024</p>
            </div>
        </div>
    )
}

export default Footer