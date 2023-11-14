import { id } from "@/types";

export default function Map ({ name }: id) {
    return (
        <div id={name} className='w-full flex flex-col'>
            <div className='flex justify-center items-center text-center py-6 bg-[#1D1D1D] xl:px-5'>
                <h1 className='text-3xl font-extrabold w-max text-white xl:text-[24px]'>PODÉS ENCONTRARNOS EN ESTA DIRECCIÓN</h1>
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d818.903548681539!2d-58.30025556482943!3d-34.815646996371676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32b4487f30acf%3A0xd39e816f5214aa07!2sALQUILER%20DE%20VAJILLAS%20ELIAN!5e0!3m2!1ses-419!2sar!4v1698955560890!5m2!1ses-419!2sar" 
                width={"100%"} 
                height="500" 
                loading="lazy" 
            />
        </div>
    );
};
