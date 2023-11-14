import Image from "next/image"
import Persons from "@/assests/images/red.png"
import People from "@/assests/images/people.jpg"
import Table from "@/assests/images/table.jpg"
import Group from "@/assests/images/group.png"
import { id } from "@/types"

export default function Cubes ({ name }:id) {
    return (
        <div id={name} className="w-full flex flex-wrap xl:flex-col">
            <div className={`${element} bg-red-500 m:h-[300px]`}>
                <Image src={People} className="object-cover h-[500px] m:h-[300px]" alt="Back" />
            </div>
            <div className={`${element} bg-purple-300`}>
                <Image src={Persons} alt="Icon" width={100} height={100}></Image>
                <div className="flex flex-col p-8 gap-4 w-[75%] xl:w-full">
                    <p className="text-[#fff] font-bold text-2xl xl:text-lg m:text-base text-center">¡Más de 5 años satisfaciendo a nuestros clientes con la mejor calidad de productos!</p>
                    <p className="text-[0.75rem] text-[#ffffffb4] font-bold text-base m:text-sm text-center">Nuestros principales servicios son el alquiler de vajillas y mantelerias, también contamos con estructuras con continas y candy bar.</p>
                </div>
            </div>
            <div className={`${element} bg-orange-300`}>
                <Image src={Group} alt="Icon" width={100} height={100}></Image>
                <div className="flex flex-col p-8 gap-4 w-[75%] xl:w-full">
                    <p className="text-[#fff] font-bold text-2xl xl:text-lg m:text-base text-center">¡Alquileres para un total de 200 personas!</p>
                    <p className="text-[0.75rem] text-[#ffffffb4] font-bold text-base m:text-sm text-center">Contamos con sillas, mesas y todo tipo de vajilla para eventos de 200 personas.</p>
                </div>
            </div>
            <div className={`${element} bg-red-500 m:h-[300px]`}>
                <Image src={Table} className="object-cover h-[500px] m:h-[300px]" alt="Back" />
            </div>
        </div>
    )
}

const element = "h-[500px] w-[50%] xl:w-full xl:w-full flex flex-col items-center justify-center"