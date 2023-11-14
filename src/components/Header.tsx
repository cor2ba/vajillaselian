import Icon from "@/assests/images/icon50.png"
import Image from "next/image"

export default function Header () {
    return (
        <div className="flex items-center justify-between xl:justify-start xl:px-4 w-[80%] xl:w-full py-4 xl:py-2 px-2 bg-[#fff]">
            <div className="flex items-center gap-5 xl:gap-2 cursor-pointer">
                <Image src={Icon} alt="Icon"></Image>
                <div className="flex flex-col justify-center">
                    <h1 className="font-bold text-xl xl:text-lg text-[#000]">VAJILLAS ELIAN.</h1>
                    <p className="font-normal text-xs text-[#000000a8]">Alquilá todo para tu evento.</p>
                </div>
            </div>
            <ol className="flex xl:hidden gap-2 font-normal items-center text-lg text-[#000000a8] [&>li]:cursor-pointer">
                <li><a href="#rentals">¿Qué alquilamos?</a></li>
                <p>|</p>
                <li><a href="#cubes">¿Quiénes somos?</a></li>
                <p>|</p>
                <li><a href="#map">Ubicación</a></li>
            </ol>
        </div>
    )
}