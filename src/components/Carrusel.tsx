import Image from "next/image"
import Back from "@/assests/images/back.jpg"
import Back2 from "@/assests/images/back2.jpg"
import Back3 from "@/assests/images/back3.jpg"
import { Carousel } from 'react-responsive-carousel'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function Carrusel () {
    return (
            <Carousel className="flex w-full h-[40vh] [&>*:nth-child(2)]:hidden l:h-[20vh]"> 
                <Image src={Back} className="xl:object-cover xl:h-full" alt="Back" /> 
                <Image src={Back2} className="xl:object-cover xl:h-full" alt="Back2" />
                <Image src={Back3} className="xl:object-cover xl:h-full" alt="Back2" /> 
            </Carousel> 
    )
}