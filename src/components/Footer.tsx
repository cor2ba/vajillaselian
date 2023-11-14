import Icon from "@/assests/images/icon50.png"
import Image from "next/image"

export default function Footer () {
    return(
        <div className="w-full flex items-center justify-around xl:justify-start bg-red-500 p-4">
            <h2 className="text-lg font-bold text-[#fff] xl:text-base">Copyright © Vajillas Elian</h2>
            <div className="flex items-center gap-5 cursor-pointer xl:hidden">
                <Image src={Icon} className="bg-[#fff] rounded-full p-2" alt="Icon"></Image>
                <div className="flex flex-col justify-center">
                    <h1 className="font-medium text-xl text-[#fff]">VAJILLAS ELIAN.</h1>
                    <p className="font-normal text-xs text-[#ffffffcb]">Alquilá todo para tu evento.</p>
                </div>
            </div>
        </div>
    )
}