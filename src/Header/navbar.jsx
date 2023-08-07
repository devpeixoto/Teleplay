import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center h-24  max-auto px-4 bg-black text-white">
            <h1 className="w-full text-3xl font-bold">TelePlay</h1>
            <ul className="flex cursor-pointer">
                <li className="p-4">Inicio</li>
                <li className="p-4">Produtos</li>
                <li className="p-4">Empresa</li>
                <li className="p-4">Descer</li>
            </ul>
        </div>
    )
}

export default Navbar;