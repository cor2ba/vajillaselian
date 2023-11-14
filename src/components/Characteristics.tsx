import Image from "next/image"
import Discount from "@/assests/characteristics/discount.png"
import Online from "@/assests/characteristics/online.png"
import Truck from "@/assests/characteristics/truck.png"

export default function Characteristics () {
    return(
        <div className="w-full bg-red-500 flex justify-center items-center">
            <div className="flex text-start xxxl:justify-center xl:text-center justify-between flex-wrap xl:flex-col items-center py-8 w-[80%] px-2 xl:px-4 xl:w-full gap-10">
                <div className={containers}>
                    <Image src={Discount} width={100} height={100} alt="Discount" />
                    <div>
                        <h2>PRECIOS BAJOS</h2>
                        <p>Tenemos los precios más bajos <br/> y competitivos.</p>
                    </div>
                </div>
                <div className={containers}>
                    <Image src={Online} width={100} height={100} alt="Online" />
                    <div>
                        <h2>COTIZÁ ONLINE</h2>
                        <p>Abona y pedí tu presupuesto <br/> vía whatsapp.</p>
                    </div>
                </div>
                <div className={containers}>
                    <Image src={Truck} width={100} height={100} alt="Truck" />
                    <div>
                        <h2>SIN ENVÍOS</h2>
                        <p>Solo envíos externos a <br/> nuestra empresa.</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const containers = `flex justify-between items-center xl:flex-col gap-5 w-auto xl:w-auto 
                     [&>div]:flex [&>div]:flex-col [&>div]:xl:items-center [&>div]:justify-center [&>div]:gap-1 
                     [&>div>h2]:font-bold [&>div>h2]:text-3xl
                     [&>div>p]:text-[15px]
                    `