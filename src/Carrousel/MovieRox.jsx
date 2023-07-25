import React, { useState } from "react";
import { Carousel, initTe} from 'tw-elements'

const Carousel = () => {
    initTe({ Carousel})

    return(
        <div 
        id="carouselExampleCaptions"
        className="relative"
        data-te-carousel-init
        data-te-carousel-slide
        >
        <div
            className="absolute botto-o left-0 right-0 z-[2] mx[15%] mb-4 flex list-none justify-center p-0" 
            data-te-carousel-indicators
        >
            <botton
                type="button"
                data-te-target="carouselExempleCaptions"
                data-te-slide-to="0"
                data-te-carousel-active
                className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 "
            ></botton>
        </div>
        <div/>

        
    )
}

// const MovieRow = (title, items) => {
//     const [scroll, setScroll] = useState(0)

//     const handleLeftArrow = () => {
//         let x = scroll + Math.round(window.innerHeight / 2)
//         if ( x > 0 ) x = 0
        
//         setScroll(x)
//     }
//     const handleRightArrow = () => {
//         let x = scroll - Math.round(window.innerHeight / 2)
//         let listW = items.result.length * 150
//         if ( window.innerWidth - listW > x ) x = (window.innerWidth - listW) - 60
        
//         setScroll(x)
//     }
    
//     return (
//         <div className="my-30">
//             <h2>{title}</h2>
//             <div>
//                 icon de voltar
//             </div>
//             <div>
//                 icon de próximo
//             </div>

//             <div>
//                 <div style={{
//                     marginLeft: scrollX,
//                     width: items.result.length * 150
//                 }}>
//                     {items.result.length > 0 && items.result.map((item, key) => {
//                         return (
//                             <div>
//                                 <img src={} alt={} />
//                             </div>
//                         )
//                     })}

//                 </div>
//             </div>
//         </div>
//     )
// }


// export default MovieRow