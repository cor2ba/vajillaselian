import instagram from "@/assests/redes/instagram.svg"
import whatsapp from "@/assests/redes/whatsapp.svg"
import React from "react"
import Image from "next/image"

export default function Contact () {
    const [tel, setTel] = React.useState(false)
    return (
        <div className="flex items-center justify-center bg-[#1D1D1D] w-full">
            <div className="flex justify-between items-center xl:px-4 w-[80%] xl:w-full px-2 py-1">
                <div className="text-[14px] flex gap-2 items-center">
                    <h2 className="xl:hidden">Calle 519 N°2447 | </h2>
                    <a className="underline hover:no-underline" href="mailto:vajillaselian@gmail.com">vajillaselian@gmail.com</a>
                </div>
                <div className="flex gap-4 [&>img]:cursor-pointer [&>img]:fill-blue-500">
                    <a href="https://www.instagram.com/vajillaselian"><Image className="fill-blue-500" width={30} height={30} src={instagram} alt="instagram" /></a>
                    <Image className="fill-blue-500 xl:hidden" onClick={() => setTel(!tel)} width={30} height={30} src={whatsapp} alt="whatsapp" />
                    {tel && 
                        <div className="flex items-center gap-2 xl:hidden">
                            <a className="hover:underline" href="https://api.whatsapp.com/send/?phone=5491138332820&text&type=phone_number&app_absent=0">1138332820</a>
                            <p>-</p>
                            <a className="hover:underline" href="https://api.whatsapp.com/send/?phone=5491166669410&text&type=phone_number&app_absent=0">1166669410</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}