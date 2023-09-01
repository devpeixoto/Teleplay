import React from "react";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const Carousel = () =>{
    
    const images = [
        'https://www.otempo.com.br/image/contentid/policy:1.2888814:1686834484/image.jpg?f=3x2&q=0.6&w=1200&$p$f$q$w=4633e5f',
        'https://img.olhardigital.com.br/wp-content/uploads/2023/01/rick-and-morty.jpg',
        'https://gizmodo.uol.com.br/wp-content/blogs.dir/8/files/2021/06/Rick_morty_netflix.jpg',
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }

    return(
        <div className=" flex w-full justify-center items-center p-1">
            <Slider {...settings} className="w-2/3" >
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <img src={image} alt="FirstImg"/>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Carousel