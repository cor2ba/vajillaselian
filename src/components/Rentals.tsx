import Manteles from "@/assests/rentals/manteles.jpg"
import Estructuras from "@/assests/rentals/estructuras.jpg"
import Vajillas from "@/assests/rentals/vajillas.jpg"
import Candies from "@/assests/rentals/candies.jpg"
import Globos from "@/assests/rentals/globos.jpg"
import Image from "next/image"
import { id } from "@/types"

export default function Rentals ({ name }:id) {
    const types = [
        {name: "VAJILLAS", img: Vajillas},
        {name: "MANTELES", img: Manteles},
        {name: "ESTRUCTURAS", img: Estructuras},
        {name: "CANDY BAR", img: Candies},
        {name: "DECORACIÓN", img: Globos},
    ]
    return (
        <div id={name} className="w-full bg-[#fff] flex flex-col text-center items-center justify-between">
            <div className='flex w-full justify-center items-center text-center py-6 bg-[#1D1D1D] xl:px-5'>
                <h1 className='text-3xl font-extrabold w-max text-white xl:text-[24px]'>¿QUÉ ALQUILAMOS?</h1>
            </div>
            <div className="flex my-4 gap-2 justify-center w-[80%] items-center flex-wrap">
                {types.map((t) => (
                    <div className={element}>
                        <Image src={t.img} alt={t.name} />
                        <p>{t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const element = `relative cursor-pointer [&>p]:blur-none opacity-70 [&>img]:blur-[1px] [&>img]:hover:blur-none hover:opacity-100 duration-1000 [&>p]:hover:hidden 
                 [&>img]:!w-[250px] [&>img]:!h-[350px]
                 [&>p]:absolute [&>p]:flex [&>p]:items-center [&>p]:justify-center [&>p]:top-0 [&>p]:right-0 [&>p]:bottom-0 [&>p]:left-0 [&>p]:text-2xl [&>p]:text-[#fff] [&>p]:font-extrabold
                `