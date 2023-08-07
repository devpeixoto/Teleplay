import React from "react";
import Capa from "../../public/Img/capa-para-loja-virtual.jpg"

const TelePlayImg = () => {
    return (
        <div className="flex justify-center items-center h-auto max-auto">
            <img src={Capa}
                className="w-full md:min-h-auto"
            />
        </div>
    )
}

export default TelePlayImg